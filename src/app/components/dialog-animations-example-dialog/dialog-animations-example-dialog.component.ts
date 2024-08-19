import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-animations-example-dialog',
  standalone: true,
  templateUrl: './dialog-animations-example-dialog.component.html',
  styleUrls: ['./dialog-animations-example-dialog.component.css'] // Correctly use styleUrls
})
export class DialogAnimationsExampleDialogComponent {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
