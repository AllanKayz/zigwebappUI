import { Component, OnInit } from '@angular/core';
import { faTwitter, faFacebook, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faUser, faComments, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { OwlOptions } from 'ngx-owl-carousel-o';
import anime from 'animejs';

@Component({
  selector: 'app-zigyn',
  templateUrl: './zigyn.component.html',
  styleUrls: ['./zigyn.component.css']
})
export class ZigynComponent implements OnInit {
  // Get Font Awesome Icons
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faYoutube = faYoutube;
  faUser = faUser;
  faCalendar = faCalendar;
  faComments = faComments;
  // Latest News Variables
  author = 'John';
  month: number = new Date().getMonth();
  day: number = new Date().getDay();
  year: number = new Date().getFullYear();
  datePublished = this.month.toString() + ' / ' + this.day.toString() + ' / ' + this.year.toString();
  // OwlCorousel For Leadership Profiles
  leadershipOptions: OwlOptions = {
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

  ngAfterViewInit(): any {
    anime.timeline({ loop: true })
      .add({
        targets: '.ml15 .word',
        scale: [14, 1],
        opacity: [0, 1],
        easing: 'easeOutCirc',
        duration: 800,
        delay: (el, i) => 800 * i
      }).add({
        targets: '.ml15',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000
      });
  }

}
