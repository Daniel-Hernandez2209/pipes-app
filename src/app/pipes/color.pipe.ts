import { Pipe, PipeTransform } from '@angular/core';
import { Color, ColorMap } from '../interfaces/hero.interface';

@Pipe({
  name: 'colorPipe',
})
export class ColorPipe implements PipeTransform {
  transform(value: Color): string {
    return Color[value];
  }
}
