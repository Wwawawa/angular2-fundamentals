import {Pipe, PipeTransform} from "@angular/core";
@Pipe({name: 'duration'})
export class DurationPipe implements PipeTransform{
    transform(value: number): string {
        switch(value) {
            case 1 : return 'Half Hour'
            case 2 : return 'Half Hour'
            case 3 : return 'Half Hour'
            case 4 : return 'Half Hour'
            default: return value.toString();

        }
    }
}