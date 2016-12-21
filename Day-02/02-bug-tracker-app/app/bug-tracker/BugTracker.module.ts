import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule }  from '@angular/common';
import { HttpModule }    from '@angular/http';
import { UtilsModule }   from '../utils/utils.module';

import { BugTrackerComponent }  from './BugTracker.component';
import { BugOperationsService } from './services/BugOperations.service';
import { BugStorageService }    from './services/BugStorage.service';
import { BugItemComponent }     from './components/BugItem.Component';
import { BugStatsComponent }    from './components/BugStats.Component';
import { ClosedCountPipe }      from './pipes/ClosedCount.pipe';
import { BugService }           from './services/BugServer.service';

@NgModule({
  imports:      [ CommonModule, FormsModule, UtilsModule, HttpModule],
  declarations: [ BugTrackerComponent, BugItemComponent, BugStatsComponent, ClosedCountPipe],
  providers:    [ BugOperationsService, BugStorageService, BugService ],
  exports:      [ BugTrackerComponent ]
})
export class BugTrackerModule { }
