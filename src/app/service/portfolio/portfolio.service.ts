import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface PortfolioData {
}

@Injectable({
  providedIn: 'root'
})

export class PortfolioService {

  constructor(private http: HttpClient) { }

  getPortfolioData() {
    return this.http.get('assets/portfolio.json');
  }
}
