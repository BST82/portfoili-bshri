import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [MatSlideToggleModule,CommonModule],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.css'
})
export class HobbiesComponent {
  isHobbiesVisible: boolean = true; // Default to visible, change as needed
  constructor(){
    this.onToggleChange(this.isHobbiesVisible);
  }

  onToggleChange(event: any): void {
    this.isHobbiesVisible = event.checked;
  }
}
