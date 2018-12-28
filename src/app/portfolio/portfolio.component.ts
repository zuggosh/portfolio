import { Component, OnInit } from '@angular/core';

import { FetchDataService } from '../service/fetch-data/fetch-data.service';
import { PortfolioService, PortfolioData } from '../service/portfolio/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  providers: [PortfolioService]
})
export class PortfolioComponent implements OnInit {
    height: string = '400px';
    arrowSize: string = '30px';
    showArrows: boolean = true;
    disableSwiping: boolean = false;
    autoPlay: boolean = false;
    debug: boolean = false;
    backgroundSize: string = 'cover';
    backgroundPosition: string = 'center center';
    backgroundRepeat: string = 'no-repeat';
    showDots: boolean = true;
    dotColor: string = '#FFF';
    showCaptions: boolean = true;
    captionColor: string = '#FFF';
    captionBackground: string = 'rgba(0, 0, 0, .35)';
    lazyLoad: boolean = false;
    hideOnNoSlides: boolean = false;
    width: string = '100%';
    portfolioData: PortfolioData;
    constructor(private fetchDataService: FetchDataService,
                private portfolioService: PortfolioService) { }

    ngOnInit() {
      this.getPortfolioData();
    }

    getPortfolioData() {
      this.portfolioService.getPortfolioData()
        .subscribe((data: PortfolioData) => {
          this.portfolioData = data;
          console.log(this.portfolioData);
        });
    }

}
