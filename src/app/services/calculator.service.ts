import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private totalIncome: number = 0
  private totalOutcome: number = 0

  private incomeList = [
    { description: "Salario", amount: 2100 },
    { description: "Venta coche", amount: 2100 }
  ]

  private outcomeList = [
    { description: "Renta", amount: 900 },
    { description: "Ropa", amount: 435.28 }
  ]

  constructor() { }

  /**
   * Obtener el total de ingresos
   * @returns Total de ingresos
   */
  getTotalIncome(): number {
    this.incomeList.forEach(incomeElement => {
      this.totalIncome += incomeElement.amount
    })
    return this.totalIncome
  }

  /**
   * Obtener el total de gastos
   * @returns Total de egresos
   */
  getTotalOutcome(): number {
    this.outcomeList.forEach(outcomeElement => {
      this.totalOutcome += outcomeElement.amount
    })
    return this.totalOutcome
  }

  /**
   * Agregar ingresos 
   * @param description Descripcion 
   * @param amount Monto
   */
  addIncome(description: string, amount: number) {
    debugger
    this.incomeList.push({ description, amount })
  }
  
  /**
   * Agregar egresos
   * @param description Descripcion
   * @param amount Monto
   */
  addOutcome(description: string, amount: number) {
    this.outcomeList.push({ description, amount })
  }

}
