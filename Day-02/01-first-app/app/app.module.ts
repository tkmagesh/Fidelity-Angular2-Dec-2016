import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { SalaryCalculatorComponent } from './SalaryCalculator.component';

@NgModule({
  imports:      [ BrowserModule , FormsModule],
  declarations: [ AppComponent, SalaryCalculatorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
