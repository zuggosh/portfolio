import { Component, OnInit } from '@angular/core';
import { Observable, Subject, pipe } from 'rxjs';

import { News, NewsAssets, NewsService } from '../service/news/news.service';
import { FetchDataService } from '../service/fetch-data/fetch-data.service';

import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  providers: [NewsService]
})

export class NewsComponent implements OnInit {
  newsAssets: NewsAssets;
  news: News;
  country = 'us';
  category = 'general';
  querySearch = '';
  querySearchRequest = new Subject();
  constructor(private newsService: NewsService,
              private fetchDataService: FetchDataService) { }

  ngOnInit() {
    this.showNewsAssets();
    this.showPressProof(this.country, this.category, this.querySearch);

    this.querySearchRequest.pipe(
        debounceTime (1000)
    ).subscribe((value) => {
        if (value !== 0) {
            this.querySearch = `&q=${value}`;
        } else {
            this.querySearch = '';
        }
        this.showPressProof(this.country, this.category, this.querySearch);
    });
  }

  changePressProofCountry(countryCode) {
    this.country = countryCode.value;
    this.showPressProof(this.country, this.category, this.querySearch);
  }
  changePressProofCategory(category) {
      this.newsAssets.categories.forEach(function (item, index) {
          if (category === item.title) {
              item.active = true;
          } else {
              item.active = false;
          }
      });
      this.category = category;
      this.showPressProof(this.country, this.category, this.querySearch);
  }

  showPressProof(countryCode, category, querySearch) {
    this.fetchDataService.changeMessage(true);
    this.newsService.getPressProof(countryCode, category, querySearch)
      .subscribe((data: News) => {
        this.news = data;
        this.fetchDataService.changeMessage(false);
      });
  }

  showNewsAssets() {
    this.newsService.getNewsAssets()
      .subscribe((data: NewsAssets) => {
          this.newsAssets = data;
      });
  }
}
