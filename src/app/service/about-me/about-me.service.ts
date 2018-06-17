import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


// todo write normal model for data
export interface AboutMe {
}

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {

  constructor(private http: HttpClient) { }
  getAboutMe () {
      return this.http.get('https://salty-tundra-80705.herokuapp.com/api/post');
  }
}
