import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name : 'closedCount',
    pure : true
})
export class ClosedCountPipe implements PipeTransform{
    transform( bugs : Array<any> ) : number {
        let result = 0;
        for(let bug of bugs){
            if (bug.isClosed)
                ++result;
        }
        return result;
    }
}