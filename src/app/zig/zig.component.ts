import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPlay, faSatellite, faUser, faMapMarkedAlt, faGlobeAfrica, faUserCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-zig',
  templateUrl: './zig.component.html',
  styleUrls: ['./zig.component.css']
})
export class ZigComponent implements OnInit {

  // Font Awesome Icons
  faFacebook = faFacebook;
  faYoutube = faYoutube;
  faTwitter = faTwitter;
  faPlay = faPlay;
  faUser = faUser;
  faSatellite = faSatellite;
  faMapMarkedAlt = faMapMarkedAlt;
  faGlobeAfrica = faGlobeAfrica;
  faUserCog = faUserCog;
  // Accordion steps declaration
  step = 0;

  constructor( ) { }

  ngOnInit(): any { }

  setStep(index: number): any {
    this.step = index;
  }

  nextStep(): any {
    this.step++;
  }

  prevStep(): any {
    this.step--;
  }


}
