import { Component } from '@angular/core';
import { PlaceAutocompleteComponent } from "../place-autocomplete/place-autocomplete.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [PlaceAutocompleteComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
