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

  getPortfolioData(): Observable<PortfolioData> {
    return this.http.get(`http://localhost:3000/api/portfolio`).pipe(map(
      data => {
        return data;
      }),
      catchError(err => {
        return throwError(err);
      }));
  }
}
