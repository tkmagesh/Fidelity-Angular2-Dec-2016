import { Bug } from '../models/Bug';
import {Injectable} from '@angular/core';

@Injectable()
export class BugOperationsService{
    
    createNew (bugName : string) : Bug{
        return {
            name : bugName,
            isClosed : false,
            createdAt : new Date()
        }
    }

    toggle (bug : Bug){
        bug.isClosed = !bug.isClosed;
    }
}