import { Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'roundNum'})

export class RoundPipe implements PipeTransform {
    transform(value:number, isUpper:boolean, addTo: number):number { //:number kieu du lieu muon tra ve
        if (isUpper)
            return Math.ceil(value + addTo); // lm tron len
        return Math.floor(value + addTo); // lam trong xuong
    }
}