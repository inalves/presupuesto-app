import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  @Input() totalIncome: number
  @Input() totalOutcome: number
  totalAvalilable: number
  outcomePercentage: number = 0

  constructor() { }

  ngOnInit() {
    this.totalAvalilable = this.totalIncome - this.totalOutcome
    this.outcomePercentage = this.totalOutcome/this.totalIncome
  }

}
