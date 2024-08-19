import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog'; // Import MatDialogModule here
import { DialogAnimationsExampleDialogComponent } from '../dialog-animations-example-dialog/dialog-animations-example-dialog.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule], // Import MatDialogModule here
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  constructor(private dialog: MatDialog) {} // Inject MatDialog here

  ngOnInit(): void {
    AOS.init({
      duration: 1200, // Optional: Customize AOS settings
      easing: 'ease-in-out',
      once: true
    });
  }
  
  timelineItems = [
    { date: '1 Aug, 2023', title: 'Web Developer at Tech Astha', description: 'As a web developer at Tech Astha, I build and maintain websites using WordPress and Angular for frontend development. My role involves leveraging various development tools to create and sustain dynamic and responsive web experiences' },
    // Add more items here
  ];

  selectedItem: any;

  selectItem(item: any) {
    this.selectedItem = item;
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsExampleDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
