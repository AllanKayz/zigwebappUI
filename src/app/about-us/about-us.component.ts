import { Component, OnInit } from '@angular/core';
import { faBolt, faAngleDoubleRight, faMobile, faEnvelope, faMapMarkerAlt, faLightbulb,
   faEnvelopeSquare, faThumbtack, faRocket, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  // Icons
  faBolt = faBolt;
  faAngleDoubleRight = faAngleDoubleRight;
  faMobile = faMobile;
  faEnvelope = faEnvelope;
  faMapMarkerAlt = faMapMarkerAlt;
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  faLightbulb = faLightbulb;
  faThumbtack = faThumbtack;
  faRocket = faRocket;
  faShieldAlt = faShieldAlt;
  faEnvelopeSquare = faEnvelopeSquare;
  // Our Owl Carousel Options
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['prev', 'next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  };

  constructor() { }

  ngOnInit(): void {
  }

}
