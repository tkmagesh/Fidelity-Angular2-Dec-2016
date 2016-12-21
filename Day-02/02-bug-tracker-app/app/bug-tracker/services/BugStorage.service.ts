import { Injectable }       from '@angular/core';
import { BugOperationsService }    from './BugOperations.service';
import { Bug }                     from '../models/Bug';

@Injectable()
export class BugStorageService{
    currentBugId : number = 0;

    constructor(private _bugOperations : BugOperationsService){

    }

    add(bugName : string) : Bug{
        let newBug = this._bugOperations.createNew(++this.currentBugId, bugName);
        window.localStorage.setItem(newBug.id.toString(), JSON.stringify(newBug));
        return newBug;
    }

    toggle(bug : Bug) : Bug{
        this._bugOperations.toggle(bug);
        window.localStorage.setItem(bug.id.toString(), JSON.stringify(bug));
        return bug;
    }

    remove(bug : Bug){
        window.localStorage.removeItem(bug.id.toString());
    }

    getAll() : Array<Bug>{
        let result = new Array<Bug>();
        let storage = window.localStorage;

        for(let i=0; i < storage.length; i++){
            let key = storage.key(i);
            let data = storage.getItem(key);
            let bug = JSON.parse(data);
            result.push(bug);
            this.currentBugId = this.currentBugId > bug.id ? this.currentBugId : bug.id;
        }
        return result;
    }
}