import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-zig',
  templateUrl: './zig.component.html',
  styleUrls: ['./zig.component.css']
})
export class ZigComponent implements OnInit {

  faFacebook = faFacebook;
  faYoutube = faYoutube;
  faTwitter = faTwitter;
  step = 0;

  constructor( ) { }

  ngOnInit(): any { }

  setStep(index: number): void {
    this.step = index;
  }

  nextStep(): any {
    this.step++;
  }

  prevStep(): any {
    this.step--;
  }


}
