import { Component, OnInit } from '@angular/core';
import { News, NewsAssets, NewsService } from '../service/news/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  providers: [NewsService]
})

export class NewsComponent implements OnInit {
  private newsAssets: NewsAssets;
  private news: News;
  private country = 'us';
  private category = 'business';
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.showNewsAssets();
    this.showPressProof(this.country, this.category);
  }

  changePressProofCountry(countryCode) {
    this.country = countryCode.value;
    this.showPressProof(this.country, this.category);
  }
  changePressProofCategory(category) {
      this.category = category;
      this.showPressProof(this.country, this.category);
  }

  showPressProof(countryCode, category) {
    this.newsService.getPressProof(countryCode, category)
        .subscribe((data: News) => {
            this.news = data;
        });
  }

  showNewsAssets() {
    this.newsService.getNewsAssets()
      .subscribe((data: NewsAssets) => {
          this.newsAssets = data;
      });
  }


}
