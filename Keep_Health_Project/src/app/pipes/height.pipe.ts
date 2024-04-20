// height.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'height'
})
export class HeightPipe implements PipeTransform {

  transform(value: number): string {
    const metros = Math.floor(value / 100);
    const centimetros = value % 100;
    return `${metros}m ${centimetros}cm`;
  }

}