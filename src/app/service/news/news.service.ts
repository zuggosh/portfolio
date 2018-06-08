import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// todo write normal model for data
export interface News {
}

export interface NewsAssets {
    categories: any;
}

@Injectable({
  providedIn: 'root'
})

export class NewsService {
    publicKey = '554d9aa5103d42e6a2360610deca0601';
    newsUrl;
    constructor(private http: HttpClient) { }
    getPressProof(countryCode: string, category: string, querySearch: string) {
        this.newsUrl = `https://newsapi.org/v2/top-headlines?country=${countryCode}&category=${category}${querySearch}&pageSize=100&apiKey=${this.publicKey}`;
        return this.http.get(this.newsUrl);
    }
    getNewsAssets() {
        return this.http.get('assets/newsAssets.json');
    }
}
