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
  private enableBtn = true;

  constructor(private fetchDataService: FetchDataService,
              private trainingService: TrainingService) { }

  ngOnInit() {
    this.fetchDataService.changeMessage(false);
    this.getTrainingData();
  }

  changeValue(bool, i) {
    bool ? this.trainingData[i].weight += 5 : this.trainingData[i].weight -= 5;
    this.enableBtn = false;
    this.trainingService.updateTrainingData(this.trainingData[i]).subscribe((data) => {
      this.enableBtn = true;
      console.log(data);
    });
  }

  getTrainingData() {
    this.fetchDataService.changeMessage(true);
    this.trainingService.getTrainingData().subscribe((data) => {
      this.trainingData = data;
      this.fetchDataService.changeMessage(false);
    });
  }

}
