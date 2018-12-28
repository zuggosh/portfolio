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
    imageUrls: (any)[] = [
        { url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56748793/dbohn_170625_1801_0018.0.0.jpg' },
        { url: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/9278671/jbareham_170917_2000_0124.jpg' },
        { url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56789263/akrales_170919_1976_0104.0.jpg' }
    ];
    height: string = '400px';
    arrowSize: string = '30px';
    showArrows: boolean = true;
    disableSwiping: boolean = false;
    autoPlay: boolean = true;
    autoPlayInterval: number = 3333;
    stopAutoPlayOnSlide: boolean = true;
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
      // console.log(this.portfolioService.getPortfolioAssets());
      // this.fetchDataService.changeMessage(false);
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
