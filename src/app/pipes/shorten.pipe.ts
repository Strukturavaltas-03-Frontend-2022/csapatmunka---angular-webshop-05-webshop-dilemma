import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string): string {
    if(!value) return value


    return [...value].slice(0,50).join('')+'...'
  }

}
