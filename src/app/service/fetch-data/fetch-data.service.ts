import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  public fetchData = new BehaviorSubject(true);
  currentMessage = this.fetchData.asObservable();
  constructor() { }

  changeMessage(bool: boolean) {
    this.fetchData.next(bool);
  }
}
