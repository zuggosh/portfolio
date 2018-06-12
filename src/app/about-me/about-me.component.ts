import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})


export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  slideToElement(element) {
    document.getElementById(element).scrollIntoView({behavior: "smooth"});
  }

}
