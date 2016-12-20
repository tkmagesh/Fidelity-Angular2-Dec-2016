import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Bug } from '../models/Bug';
import { BugOperationsService } from '../services/BugOperations.service';

@Component({
    template : `
        <li>
            <span [ngClass]="{closed : data.isClosed}" class="bugname" (click)="onBugClick()">
                {{data.name}}
            </span>
            <div class="datetime">{{data.createdAt}}</div>
                
        </li>
    `,
    selector : 'bug-item',
    styleUrls : ['app/bug-tracker/components/BugItem.style.css']
})
export class BugItemComponent{

    @Input()
    data : Bug = null;

    @Output()
    onToggle : EventEmitter<Bug> = new EventEmitter<Bug>();

    /*constructor(private bugOperations : BugOperationsService){

    }*/
    onBugClick(){
        //this.bugOperations.toggle(this.data);
        this.onToggle.emit(this.data);
    }
}