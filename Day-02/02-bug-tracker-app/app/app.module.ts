import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';


import { AppComponent }         from './app.component';
import { BugTrackerComponent }  from './bug-tracker/BugTracker.component';
import { BugOperationsService } from './bug-tracker/services/BugOperations.service'
import { BugItemComponent }     from './bug-tracker/components/BugItem.Component';
import { BugStatsComponent }    from './bug-tracker/components/BugStats.Component';
import { TrimTextPipe }         from './bug-tracker/pipes/TrimText.pipe'
import { ClosedCountPipe }      from './bug-tracker/pipes/ClosedCount.pipe'

@NgModule({
  imports:      [ BrowserModule , FormsModule],
  declarations: [ AppComponent, BugTrackerComponent, BugItemComponent, BugStatsComponent, TrimTextPipe, ClosedCountPipe],
  bootstrap:    [ AppComponent ],
  providers:    [ BugOperationsService ]
})
export class AppModule { }
