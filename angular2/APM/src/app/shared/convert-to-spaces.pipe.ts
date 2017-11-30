import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name:'convertToSpaces'})
export class ConvertToSpacesPipe implements PipeTransform{
    transform(input: string, key: string): string{

        return input.replace(key,' ');
	}   
}