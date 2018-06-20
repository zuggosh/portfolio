import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  private fetchData = new BehaviorSubject(true);
  currentMessage = this.fetchData.asObservable();
  constructor() { }

  changeMessage(data: boolean) {
      this.fetchData.next(data);
  }
}
