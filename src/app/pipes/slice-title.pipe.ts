import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceTitle',
})
export class SliceTitlePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;

    if (value.includes('-')) {
      const before = value.substring(0, value.indexOf('-'));
      return before;
    }

    if (!value.includes('-')) {
      return value;
    }
  }
}

// transform(value: string): string {
//   if(!value) return value

//   return [...value].slice(0,30).join('')+'...'
// }

// const before_ = str.substring(0, str.indexOf('_'));

// console.log(before_); // 👉️ 'one two'
