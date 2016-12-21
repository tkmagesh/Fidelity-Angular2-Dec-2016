import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule }  from '@angular/common';
import { UtilsModule }   from '../utils/utils.module';

import { BugTrackerComponent }  from './BugTracker.component';
import { BugOperationsService } from './services/BugOperations.service'
import { BugItemComponent }     from './components/BugItem.Component';
import { BugStatsComponent }    from './components/BugStats.Component';
import { ClosedCountPipe }      from './pipes/ClosedCount.pipe';

@NgModule({
  imports:      [ CommonModule, FormsModule, UtilsModule],
  declarations: [ BugTrackerComponent, BugItemComponent, BugStatsComponent, ClosedCountPipe],
  providers:    [ BugOperationsService ],
  exports:      [ BugTrackerComponent ]
})
export class BugTrackerModule { }
