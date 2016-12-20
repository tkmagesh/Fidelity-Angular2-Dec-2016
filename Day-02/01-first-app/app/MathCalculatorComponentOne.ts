import { Component }        from '@angular/core';
import { MathCalculator }   from './models/MathCalculator';

@Component({
    template : `
        <h3>Math Calculator - 1</h3>
        <hr>
        <input type="number" [(ngModel)]="calculator.number1">
        <input type="number" [(ngModel)]="calculator.number2">
        <input type="button" (click)="calculator.add()" value="Add">
        <input type="button" (click)="calculator.subtract()" value="Subtract">
        <input type="button" (click)="calculator.multiply()" value="Multiply">
        <input type="button" (click)="calculator.divide()" value="Divide">
        <div>{{calculator.result}}</div>
    `,
    selector : 'math-calculator-one'
})
export class MathCalculatorComponentOne{
    calculator : MathCalculator = new MathCalculator();
}