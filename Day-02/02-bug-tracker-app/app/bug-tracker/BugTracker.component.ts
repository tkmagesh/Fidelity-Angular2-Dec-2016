import { Component } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/BugOperations.service';

@Component({
    //templateUrl : `app/bug-tracker/BugTracker.template.html`,
    template : `
        <section class="content">
            <bug-stats [data]="bugs"></bug-stats>
            <section class="sort">
                <label for="">Order By:</label>
                <input type="text" name="" id="">
                <label for=""> Descending ? :</label>
                <input type="checkbox" name="" id="">
            </section>
            <section class="edit">
                <label for=""> Bug :</label>
                <input type="text" [(ngModel)]="newBugName">
                <input type="button" value="Add New" (click)="onAddNewClick()">
            </section>
            <section class="list">
                <ol>
                    <bug-item *ngFor="let bug of bugs" [data]="bug" (onToggle)="onBugItemToggle($event)"></bug-item>
                </ol>
                <input type="button" value="Remove Closed" (click)="onRemoveClosedClick()">
            </section>
        </section>`,
    styleUrls : ['app/bug-tracker/BugTracker.style.css'],
    selector : 'bug-tracker'
})
export class BugTrackerComponent{
    bugs : Array<Bug> = [];
    newBugName : string = '';

    //bugOperations : BugOperations = new BugOperations();
    //bugOperations : BugOperationsService = null;

    constructor(private bugOperations : BugOperationsService){
        //this.bugOperations = bugOperations;
    }

    onAddNewClick(){
        let newBug : Bug = this.bugOperations.createNew(this.newBugName);
        this.bugs.push(newBug);
        this.newBugName = '';
    }

    

   
    onBugItemToggle(bug : Bug){
        //
        this.bugs = this.bugs.map((b) => {
            if (b.id === bug.id){
                this.bugOperations.toggle(bug);
                return bug;
            } else {
                return b;
            }
        });
        
    }
    onRemoveClosedClick(){
        for(let i = this.bugs.length-1; i >= 0; i--)
            if (this.bugs[i].isClosed)
                this.bugs.splice(i,1);
    }
}