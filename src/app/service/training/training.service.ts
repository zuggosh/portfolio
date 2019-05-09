import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {MailMe} from '../about-me/about-me.service';

export interface TrainingData {
}
export interface TrainingDataUpdate {
}

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  // serverUrl = 'https://salty-tundra-80705.herokuapp.com';
  serverUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getTrainingData(): Observable<TrainingData> {
    return this.http.get(`${this.serverUrl}/api/training`).pipe(map(
      data => data
      ),
      catchError(err => {
        return throwError(err);
      }));
  }

  updateTrainingData (data): Observable<TrainingDataUpdate> {
    return this.http.post(`${this.serverUrl}/api/trainingupdate`, {data: data}).pipe(map(
      data1 => data1
      ),
      catchError(err => {
        return throwError(err);
      }));
  }

}
