import { Component } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';


@Component({
  selector: 'app-place-autocomplete',
  standalone: true,
  imports: [GoogleMap], // Import GoogleMap component directly
  templateUrl: './place-autocomplete.component.html',
  styleUrls: ['./place-autocomplete.component.css']
})
export class PlaceAutocompleteComponent {
  center: google.maps.LatLngLiteral = { lat: 26.4499, lng: 80.3319 }; // Coordinates for Kanpur
  zoom = 12; // Increased zoom level for a closer view
}


