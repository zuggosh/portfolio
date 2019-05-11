import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

// todo write normal model for data
export interface AboutMe {
  paragraphs: ParagraphsAboutMe;
}
interface ParagraphsAboutMe {
  title: string;
  name: string;
  list?: any[];
  subParagraphs?: SubParagraphsAboutMe[];
}
interface SubParagraphsAboutMe {
  subDescription: string;
  subList?: any[];
  subTitle: string;
}

export interface MailMe {
}


@Injectable({
  providedIn: 'root'
})
export class AboutMeService {
  constructor(private http: HttpClient) { }

  serverUrl = 'https://salty-tundra-80705.herokuapp.com';
  getAboutMe(): Observable<Object> {
    return this.http.get<AboutMe>(`${this.serverUrl}/api/profile`).pipe(map(
      data => data,
      catchError(err => throwError(err))
    ));
  }

  mailMe (email: string, message: string): Observable<MailMe> {
    return this.http.post(`${this.serverUrl}/api/mail`, {
      mail: email,
      message: message
    }).pipe();
  }
}
