import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface News {
    heroesUrl: string;
    textfile: string;
}

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  configUrl = 'assets/config.json';
  constructor(private http: HttpClient) { }
  getConfig() {
      return this.http.get(this.configUrl);
  }
}
