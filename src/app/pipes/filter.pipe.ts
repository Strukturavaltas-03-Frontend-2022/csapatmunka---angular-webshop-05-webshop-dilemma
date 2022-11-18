import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe<T extends { [key: string]: any }> implements PipeTransform {

  transform(value: T[], phrase: string = '', key: string | string[]): T[] {
    if (!Array.isArray(value) || !phrase || !key.length) {
      return value;
    }

    phrase = phrase.toLowerCase();

    if (!Array.isArray(key)) {
      return value.filter((item) =>
        `${item[key]}`.toLowerCase().includes(phrase)
      );
    } else {
      let result: T[] = [];

      key.forEach((keyItem: string) => {
        const partialResult: T[] = value.filter((item) =>
          `${item[keyItem]}`.toLowerCase().includes(phrase)
        );

        result = [...result, ...partialResult];
      });

      return result;
    }
  }
}
