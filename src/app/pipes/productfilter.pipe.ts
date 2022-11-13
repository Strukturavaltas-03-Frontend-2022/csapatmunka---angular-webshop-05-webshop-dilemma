import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productfilter'
})
export class ProductFilterPipe<T extends {[x:string]: any}>  implements PipeTransform {

  transform(value: T[], key:string = ''): T[] {
    if(!Array.isArray(value) || !key){
      return value
    }

    return value.filter(user=> user[key]===true)
  }

}
