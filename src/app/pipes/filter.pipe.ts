import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe<T extends {[key: string]: any} > implements PipeTransform {

  transform(value: T[], phrase:string, key:string): T[] {
   if(!Array.isArray(value) || !phrase || !key){
    return value
   }

   phrase = phrase.toLowerCase()

   return value.filter(product => (''+ product[key]).toLowerCase().includes(phrase) )

  }

}

