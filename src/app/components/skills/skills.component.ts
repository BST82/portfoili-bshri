import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = [
    { name: 'HTML', percentage: 95, showRating: false, backgroundColor: 'bg-blue-600', textColor: 'text-white', originalName: 'HTML' },
    { name: 'Tailwind CSS', percentage: 80, showRating: false, backgroundColor: 'bg-blue-600', textColor: 'text-white', originalName: 'Tailwind CSS' },
    { name: 'Angular', percentage: 70, showRating: false, backgroundColor: 'bg-blue-600', textColor: 'text-white', originalName: 'Angular' },
    { name: 'Node.js', percentage: 60, showRating: false, backgroundColor: 'bg-blue-600', textColor: 'text-white', originalName: 'Node.js' },
    { name: 'MongoDB', percentage: 60, showRating: false, backgroundColor: 'bg-blue-600', textColor: 'text-white', originalName: 'MongoDB' }
  ];

  onMouseEnter(skill: any) {
    skill.showRating = true;
    skill.name = ""; // Hide the skill name on hover
    skill.backgroundColor = 'bg-green-600'; // Change background color on hover
    skill.textColor = 'text-yellow-100';    // Change text color on hover
  }

  onMouseLeave(skill: any) {
    skill.showRating = false;
    skill.name = skill.originalName; // Restore the original skill name on mouse leave
    skill.backgroundColor = 'bg-blue-600'; // Revert background color when not hovering
    skill.textColor = 'text-white';         // Revert text color when not hovering
  }
}
