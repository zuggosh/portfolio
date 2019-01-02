import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

export interface PortfolioData {
}

@Injectable({
  providedIn: 'root'
})

export class PortfolioService {

  constructor(private http: HttpClient) { }
  serverUrl = 'https://salty-tundra-80705.herokuapp.com';
  // serverUrl = 'http://localhost:3000';
  getPortfolioData(): Observable<PortfolioData> {
    return this.http.get(`${this.serverUrl}/api/portfolio`).pipe(map(
      data => {
        return data;
      }),
      catchError(err => {
        return throwError(err);
      }));
  }
}
