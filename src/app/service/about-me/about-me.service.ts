import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';


// todo write normal model for data
export interface AboutMe {
}
export interface MailMe {
}


@Injectable({
  providedIn: 'root'
})
export class AboutMeService {
  constructor(private http: HttpClient) { }

  serverUrl = 'https://salty-tundra-80705.herokuapp.com';
  // serverUrl = 'http://localhost:3000';
    getAboutMe(): Observable<AboutMe> {
    return this.http.get(`${this.serverUrl}/api/post`).pipe(map(
      data => {
        return data;
      }),
      catchError(err => {
        console.log(err);
        return throwError(err);
      }));
  }

  mailMe (email: string, message: string): Observable<MailMe> {
    return this.http.post<MailMe>(`${this.serverUrl}/api/mail`, {
      mail: email,
      message: message
    }).pipe();
  }
}
