import { Component }    from '@angular/core';
import { SalaryCalculator } from './models/SalaryCalculator';

@Component({
    template : `
                <h3>Salary Calculator</h3>
                    <section class="content" id="section-1">
                    <hr/>
                    <div class="field"><label for="">Basic :</label><input type="number" [(ngModel)]="calculator.basic" id="txtBasic"></div>
                    <div class="field"><label for="">HRA :</label><input type="number" [(ngModel)]="calculator.hra" id="txtHra"></div>
                    <div class="field"><label for="">DA :</label><input type="number" [(ngModel)]="calculator.da" id="txtDa"></div>
                    <div class="field">
                        <label for="">Tax :</label>
                        <input type="range" [(ngModel)]="calculator.tax" id="rangeTax" min="0" max="30">
                        <span id="spanTax">{{calculator.tax}}</span>
                    </div>
                    <div class="field"><input type="button" value="Calculate" id="btnCalculate" (click)="calculator.calculate()"></div>
                    <div class="field">
                        <div id="divResult">{{calculator.salary}}</div>
                    </div>
                </section>
                `,
    selector : 'salary-calculator'
})
export class SalaryCalculatorComponent{
    calculator : SalaryCalculator = new SalaryCalculator();
}