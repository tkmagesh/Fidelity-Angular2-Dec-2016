import { Bug } from '../models/Bug';
import {Injectable} from '@angular/core';

@Injectable()
export class BugOperationsService{
    currentBugId : number = 0;

    createNew (bugName : string) : Bug{
        console.log(this.currentBugId);
        return {
            id : ++this.currentBugId,
            name : bugName,
            isClosed : false,
            createdAt : new Date()
        }
    }

    toggle (bug : Bug){
        bug.isClosed = !bug.isClosed;
    }
}