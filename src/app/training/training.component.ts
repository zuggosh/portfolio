import { Component, OnInit } from '@angular/core';

import { FetchDataService } from '../service/fetch-data/fetch-data.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
  public mockData: any;
  constructor(private fetchDataService: FetchDataService) {
    this.mockData = [
      {
        title: 'chest',
        exercises: [
          {
            name: 'gym dumbbells',
            wight: 35
          },
          {
            name: 'butterfly',
            wight: 110
          },
          {
            name: 'gym apparatus',
            wight: 60
          }
        ]
      }
    ];
  }

  ngOnInit() {
    this.fetchDataService.changeMessage(false);
  }

  changeValue(bool, i, j) {
    bool ? this.mockData[i].exercises[j].wight += 5 : this.mockData[i].exercises[j].wight -= 5;
  }

}
