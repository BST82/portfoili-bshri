import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [MatGridListModule, CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Two', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Three', cols: 1, rows: 1, color: '#DDBDF1'},
  ];

  cols: number = 1; // Default to 1 column for small devices

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      if (result.matches) {
        this.cols = 1; // Single column for small screens
        this.tiles.forEach(tile => tile.cols = 1); // Ensure each tile occupies 1 column
      } else {
        this.cols = 3; // Three columns for larger screens
        this.tiles.forEach(tile => tile.cols = 1); // Default to single column for each tile
      }
    });
  }
}
