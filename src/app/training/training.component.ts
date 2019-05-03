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

  constructor(private fetchDataService: FetchDataService,
              private trainingService: TrainingService) { }

  ngOnInit() {
    this.fetchDataService.changeMessage(false);
    this.getTrainingData();
  }

  changeValue(bool, i, j) {
    bool ? this.trainingData[i].exercises[j].wight += 5 : this.trainingData[i].exercises[j].wight -= 5;
  }

  getTrainingData() {
    this.fetchDataService.changeMessage(true);
    this.trainingService.getTrainingData().subscribe((data) => {
      this.trainingData = data;
      this.fetchDataService.changeMessage(false);
    });
  }

}
