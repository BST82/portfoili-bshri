import { Component,ElementRef,ViewChild, afterNextRender } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { EducationComponent } from "./components/education/education.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { HobbiesComponent } from "./components/hobbies/hobbies.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ReferencesComponent } from "./components/references/references.component";
import { PortfolioSectionComponent } from "./components/portfolio-section/portfolio-section.component";
import { PlaceAutocompleteComponent } from "./components/place-autocomplete/place-autocomplete.component";
import { FooterComponent } from "./components/footer/footer.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ExperienceComponent, EducationComponent, SkillsComponent, HobbiesComponent, ContactComponent, ReferencesComponent, PortfolioSectionComponent, PlaceAutocompleteComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('content') contentRef!: ElementRef ;
  title = 'bhagyashriResume';
  constructor() {
    afterNextRender(() => {
      console.log('content height: ' + this.contentRef.nativeElement.scrollHeight);
    });
  }

  animationClass = '';

  animateElement() {
    this.animationClass = 'animate__animated animate__bounce';
    setTimeout(() => {
      this.animationClass = ''; // Remove the class after animation ends
    }, 1000); // Duration of the animation (in milliseconds)
  }
}
