import { Component, EventEmitter, Output } from '@angular/core';
import { Income } from '../models/income.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  descriptionInput: string = 'Prueba'

  @Output() incomeCreated = new EventEmitter<Income>()

  // onSubmit() {
  //   const newIncome = new Income(this.descriptionInput, this.amountInput, this.isIncome)
  //   this.incomeCreated.emit(newIncome)
  // }

  changeValue(){
    this.descriptionInput = "Prueba por evento"
  }

}
