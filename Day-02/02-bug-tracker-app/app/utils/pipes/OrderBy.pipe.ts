import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name : 'orderBy'
})
export class OrderByPipe implements PipeTransform{
    transform( data : Array<any> = [], by : string = 'name', descending : boolean = false ) : Array<any> {
        let comparer = getComparerFor(by);
        if (descending)
            comparer = getDescending(comparer);
        return data.sort(comparer);
    }
}

function getComparerFor(attrName : string) : { (item1 : any, item2: any) : number }{
    return function (item1:any, item2:any ) : number {
        if (item1[attrName] < item2[attrName])
            return -1;
        if (item1[attrName] > item2[attrName])
            return 1;
        return 0
    }
}

function getDescending(comparer :  { (item1 : any, item2: any) : number } ) : { (item1 : any, item2: any) : number } {
    return function(item1 : any, item2 : any){
        return -1 * comparer(item1, item2);
    }
}