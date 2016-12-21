import { Bug } from '../models/Bug';
import {Injectable} from '@angular/core';

@Injectable()
export class BugOperationsService{
    

    createNew (id : number, bugName : string) : Bug{
        return {
            id : id,
            name : bugName,
            isClosed : false,
            createdAt : new Date()
        }
    }

    toggle (bug : Bug){
        bug.isClosed = !bug.isClosed;
    }
}