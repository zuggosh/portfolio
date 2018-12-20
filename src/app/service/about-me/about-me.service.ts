import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';


// todo write normal model for data
export interface AboutMe {
}

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {
  constructor(private http: HttpClient) { }

  serverUrl = 'https://salty-tundra-80705.herokuapp.com';
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

  mailMe(mail: string, text: string) {
    return this.http.post(`${this.serverUrl}/api/mail`, {
      mail: mail,
      text: text
    });
  }
}
