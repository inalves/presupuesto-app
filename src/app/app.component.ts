import { Component, OnInit } from '@angular/core';
import { Income } from './models/income.model';
import { CalculatorService } from './services/calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'presupuesto-app';
  totalIncome: number = 0;
  totalOutcome: number = 0;

  constructor(private calculatorService: CalculatorService) {}

  ngOnInit() {
    this.totalIncome = this.calculatorService.getTotalIncome();
    this.totalOutcome = this.calculatorService.getTotalOutcome();
  }

  onIncomeAdd(income: Income) {
    if (income.isIncome) {
      this.calculatorService.addIncome(income.description, income.amount);
    } else {
      this.calculatorService.addOutcome(income.description, income.amount);
    }
  }
}
