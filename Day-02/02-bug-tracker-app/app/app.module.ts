import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { BugTrackerModule }   from './bug-tracker/BugTracker.module';

import { AppComponent }         from './app.component';

@NgModule({
  imports:      [ BrowserModule , FormsModule, BugTrackerModule],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
