import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})


export class ReversePipe implements PipeTransform {

  transform(values: any) {
    if (values) {
      return values.slide().reverse();
    }
  }
}