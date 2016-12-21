import { Component, OnInit } from '@angular/core';
import { Bug } from './models/Bug';
import { BugStorageService } from './services/BugStorage.service';

@Component({
    //templateUrl : `app/bug-tracker/BugTracker.template.html`,
    template : `
        <section class="content">
            <bug-stats [data]="bugs"></bug-stats>
            <section class="sort">
                <label for="">Order By:</label>
                <select [(ngModel)]="bugSortBy">
                    <option value="name">Name</option>
                    <option value="isClosed">Status</option>
                </select>
                <label for=""> Descending ? :</label>
                <input type="checkbox" [(ngModel)]="bugSortOrder">
            </section>
            <section class="edit">
                <label for=""> Bug :</label>
                <input type="text" [(ngModel)]="newBugName">
                <input type="button" value="Add New" (click)="onAddNewClick()">
            </section>
            <section class="list">
                <ol>
                    <bug-item *ngFor="let bug of (bugs | orderBy:bugSortBy:bugSortOrder)" [data]="bug" (onToggle)="onBugItemToggle($event)"></bug-item>
                </ol>
                <input type="button" value="Remove Closed" (click)="onRemoveClosedClick()">
            </section>
        </section>`,
    styleUrls : ['app/bug-tracker/BugTracker.style.css'],
    selector : 'bug-tracker'
})
export class BugTrackerComponent extends OnInit{
    bugs : Array<Bug> = [];
    newBugName : string = '';

    ngOnInit(){
        this.bugs = this._bugStorage.getAll();
    }
    constructor(private _bugStorage : BugStorageService){
        super();
    }

    onAddNewClick(){
        let newBug : Bug = this._bugStorage.add(this.newBugName);
        this.bugs = this.bugs.concat([newBug]);
        this.newBugName = '';
    }
    
    onBugItemToggle(bug : Bug){
        //
        this.bugs = this.bugs.map((b) => {
            if (b.id === bug.id){
                this._bugStorage.toggle(bug);
                return bug;
            } else {
                return b;
            }
        });
        
    }
    onRemoveClosedClick(){
        for(let i = this.bugs.length-1; i >= 0; i--)
            if (this.bugs[i].isClosed){
                this._bugStorage.remove(this.bugs[i]);
                this.bugs.splice(i,1);
            }
    }
}