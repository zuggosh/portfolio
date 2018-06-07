import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// todo write normal model for data
export interface News {

}

@Injectable({
  providedIn: 'root'
})

export class NewsService {
    publicKey;
    newsUrl;
    constructor(private http: HttpClient) { }
    getPressProof() {
        this.publicKey = '554d9aa5103d42e6a2360610deca0601';
        this.newsUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.publicKey}`;
        return this.http.get(this.newsUrl);
    }
}
