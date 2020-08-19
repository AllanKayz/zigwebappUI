import { Component, OnInit } from '@angular/core';
import { faBolt, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  // Icons
  faBolt = faBolt;
  faAngleDoubleRight = faAngleDoubleRight;

  constructor() { }

  ngOnInit(): void {
  }

}
