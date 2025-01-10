import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'piceCal'
})
export class PiceCalPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if (value <= 1000) {
      return "Low Price"
    } else {
      return "High Price"
    }
  }

}
