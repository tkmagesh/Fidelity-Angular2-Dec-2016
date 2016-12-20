import { Component }        from '@angular/core';
import { MathCalculator }   from './models/MathCalculator';

@Component({
    template : `
        <h3>Math Calculator - 2</h3>
        <hr>
        <input type="number" [(ngModel)]="calculator.number1">
        <select [(ngModel)]="operation">
            <option value="add">Add</option>
            <option value="subtract">Subtract</option>
            <option value="multiply">Multiply</option>
            <option value="divide">Divide</option>
        </select>
        <input type="number" [(ngModel)]="calculator.number2">
        <input type="button" value="Calculate" (click)="onCalculateClick()">
        <div>{{calculator.result}}</div>
    `,
    selector : 'math-calculator-two'
})
export class MathCalculatorComponentTwo{
    calculator : MathCalculator = new MathCalculator();

    

    onCalculateClick(oper:string){
        this.calculator[oper]();
    }
}