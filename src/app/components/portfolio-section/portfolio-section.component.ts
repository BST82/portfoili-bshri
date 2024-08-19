import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-portfolio-section',
  standalone: true,
  imports: [MatGridListModule,CommonModule],
  templateUrl: './portfolio-section.component.html',
  styleUrl: './portfolio-section.component.css'
})
export class PortfolioSectionComponent {

  tiles: Tile[] = [
    
    {text: 'Two', cols: 1, rows: 3, color: 'lightgreen'},
    {text: 'One', cols: 2, rows: 1, color: 'lightblue'},
    {text: 'Three', cols: 1, rows: 3, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  
}
