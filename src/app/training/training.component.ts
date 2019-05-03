import { Component, OnInit } from '@angular/core';

import { FetchDataService } from '../service/fetch-data/fetch-data.service';
import { TrainingService } from '../service/training/training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  private trainingData: object;
  public mockData: any;

  constructor(private fetchDataService: FetchDataService,
              private trainingService: TrainingService) {
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
    this.getTrainingData();
  }

  changeValue(bool, i, j) {
    bool ? this.mockData[i].exercises[j].wight += 5 : this.mockData[i].exercises[j].wight -= 5;
  }

  getTrainingData() {
    this.fetchDataService.changeMessage(true);
    this.trainingService.getTrainingData().subscribe((data) => {
      this.trainingData = data;
      this.fetchDataService.changeMessage(false);
    });
  }

}
