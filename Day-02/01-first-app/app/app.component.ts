import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{message}}</h1>
    <input type="text" [(ngModel)]="name">
    <input type="button" value="Greet" (click)="onGreet()"/>
    <hr>
    <salary-calculator></salary-calculator>
  `,
})
export class AppComponent  { 
  message : string = '';
  name : string = '';

  onGreet(){
    this.message = 'Hello ' + this.name + '! Welcome to Angular 2!!';
  }
}
