import { Component, OnInit } from '@angular/core';
import { AboutMeService, AboutMe } from '../service/about-me/about-me.service';
import { FetchDataService } from '../service/fetch-data/fetch-data.service';


@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.scss'],
    providers: [AboutMeService]
})


export class AboutMeComponent implements OnInit {
  aboutMe: AboutMe;
  constructor(private aboutMeService: AboutMeService,
              private fetchDataService: FetchDataService) { }

  ngOnInit() {
    this.getAboutMeInfo();
  }
  slideToElement(element) {
    document.getElementById(element).scrollIntoView({behavior: "smooth"});
  }
  getAboutMeInfo () {
    this.aboutMeService.getAboutMe()
        .subscribe((data: AboutMe) => {
            this.aboutMe = data;
            console.log(data)
            this.fetchDataService.changeMessage(false);
        });
  }
}
