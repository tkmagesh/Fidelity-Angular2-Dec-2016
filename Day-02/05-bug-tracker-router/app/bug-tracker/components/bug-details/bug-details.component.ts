import {Component, OnInit} from '@angular/core';
import {BugOperations} from '../../services/bugOperations';
import {BugService} from '../../services/bugService';
import {Router, ActivatedRoute} from '@angular/router';

import {Http} from '@angular/http';
import 'rxjs/Rx';
import { Observable}  from 'rxjs/Observable';

@Component({
    selector : 'bug-details',
    styleUrls : ['style.css'],
    template : `

       <h1>Bug Detail will be displayed here</h1>
        
    `
})
export class BugDetails implements OnInit{
   

    newBug:string = '';

    

    constructor( private route: ActivatedRoute, private bugOperations : BugOperations, private bugService : BugService, private router : Router){
        
    }

    ngOnInit(){
      
      this.route.params.map(p => p.id).subscribe(id => console.log(id));
    }
    
    

    onAddNew(){
        var newBugData = this.bugOperations.createNew(this.newBug);
        this.bugService.addNew(newBugData).subscribe(bug => this.router.navigate(['bugs']));
    }

    
}