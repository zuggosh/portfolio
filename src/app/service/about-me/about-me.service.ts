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
  // getAboutMe() {
  //     return this.http.get('https://salty-tundra-80705.herokuapp.com/api/post');
  // }
  getAboutMe(): Observable<AboutMe> {
    return this.http.get('https://salty-tundra-80705.herokuapp.com/api/post').pipe(map(
      data => {
        return data;
      }),
      catchError(err => {
        console.log(err);
        return throwError(err);
      }));
  }
}
