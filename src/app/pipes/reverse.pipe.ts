import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  pure:true
})

export class ReversePipe implements PipeTransform {
  transform(values: any) {
    if (values) {
      return values.reverse();
    }
  }
}