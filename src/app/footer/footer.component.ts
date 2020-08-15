import { Component, OnInit } from '@angular/core';
import { faMobile, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  // Get Current Year
  currentYear: number = new Date().getFullYear();
  // Get Font Icons
  faMobile = faMobile;
  faEnvelope = faEnvelope;
  faMapMarkerAlt = faMapMarkerAlt;
  latitude = 51.678418;
  longitude = 7.809007;
  location(x): any {
    this.latitude = x.coords.lat;
    this.longitude = x.coords.lng;
  }
  constructor() { }

  ngOnInit(): void { }
}
