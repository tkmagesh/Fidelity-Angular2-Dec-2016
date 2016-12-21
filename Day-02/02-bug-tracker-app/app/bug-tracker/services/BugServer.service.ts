import {Injectable} from '@angular/core';


import {Http} from '@angular/http';
import 'rxjs/Rx';
import { Observable}  from 'rxjs/Observable';
import { Bug } from '../models/Bug';
import { BugOperationsService } from './BugOperations.service';

@Injectable()
export class BugService{
    constructor(private _bugOperations : BugOperationsService, private http : Http ){
        
    }
    getAll() : Observable<Array<Bug>>{
        return this.http
            .get('http://localhost:9000/bugs')
            .map(response => response.json())
    }

    addNew(bugName : string) : Observable<Bug>{
        var newBug = this._bugOperations.createNew(0, bugName);
        return this.http
            .post('http://localhost:9000/bugs', newBug)
            .map(response => response.json());
    }

    save(bug : Bug) : void {
        console.log('triggering save fgor ', bug);
         this.http
            .put('http://localhost:9000/bugs/' + bug.id, bug)
            .map(response => response.json())
            .subscribe(response => {});
    }

    remove(bug : Bug) : void{
         this.http
            .delete('http://localhost:9000/bugs/' + bug.id)
            .subscribe(response => {});
    }
}