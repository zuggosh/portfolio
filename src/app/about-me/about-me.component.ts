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
  @HostListener("window:scroll", ['$event'])
  onWindowScroll() {
      let topBuffet = 0;
      const el = document.getElementById('aboutMeNav');
      const aboutMe = document.getElementById('aboutMe').getBoundingClientRect().top;
      if (aboutMe < 0) {
          topBuffet = 50;
          el.style.top = Math.abs(aboutMe) + topBuffet + 'px';
      }
  }
  slideToElement(element) {
    document.getElementById(element).scrollIntoView({behavior: "smooth"});
  }

}
