// height.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'height'
})
export class HeightPipe implements PipeTransform {
  transform(value: number): string {
    const meters = value / 100;
    return meters.toFixed(2) + 'm';
  }
}