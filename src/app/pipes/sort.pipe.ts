import { Pipe, PipeTransform } from '@angular/core';
import { SortType } from '../model/sortType';

@Pipe({
  name: 'sort'
})
export class SortPipe<T extends { [key: string]: any }> implements PipeTransform {

  transform(value: T[], sortType: SortType): T[] {
    if (!Array.isArray(value) || !sortType) {
      return value;
    }

    return this?.[`sort${sortType}`](value);
  }

  sortNameAZ(value: T[]) {
    return value.sort((a, b) => a['name'].localeCompare(b['name']));
  }

  sortNameZA(value: T[]) {
    return value.sort((a, b) => b['name'].localeCompare(a['name']));
  }

  sortPrice19(value: T[]) {
    return value.sort((a, b) => a['price'] - b['price']);
  }

  sortPrice91(value: T[]) {
    return value.sort((a, b) => b['price'] - a['price']);
  }
}
