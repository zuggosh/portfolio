import { Component, OnInit } from '@angular/core';
import { News, NewsService } from '../service/news/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  providers: [NewsService]
})
export class NewsComponent implements OnInit {
  news: News;
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.showConfig();
  }

  showConfig() {
    this.newsService.getPressProof()
        .subscribe((data: News) => {
            this.news = data;
            console.log(this.news);
        });
  }
}
