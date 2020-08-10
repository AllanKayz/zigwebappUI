import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zig',
  templateUrl: './zig.component.html',
  styleUrls: ['./zig.component.css']
})
export class ZigComponent implements OnInit {

  step = 0;

  constructor ( private titleService: Title, private router: Router ) { }

  public setTitle ( newTitle: string ) {
    this.titleService,this.setTitle( newTitle );
  }

  ngOnInit() {
    let pageURL = this.router.url;
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }


}
