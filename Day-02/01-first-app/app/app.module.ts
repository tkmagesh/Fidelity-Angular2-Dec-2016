import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { SalaryCalculatorComponent } from './SalaryCalculator.component';
import { MathCalculatorComponentOne } from './MathCalculatorComponentOne';
import { MathCalculatorComponentTwo } from './MathCalculatorComponentTwo';
@NgModule({
  imports:      [ BrowserModule , FormsModule],
  declarations: [ AppComponent, SalaryCalculatorComponent, MathCalculatorComponentOne, MathCalculatorComponentTwo ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
