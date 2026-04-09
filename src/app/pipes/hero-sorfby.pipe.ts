import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';
import { split } from 'postcss/lib/list';

@Pipe({
  name: 'heroSorBYfPipe',
})
export class heroSorBYfPipe implements PipeTransform {
  transform(value: Hero[], surfby: keyof Hero | null): Hero[] {
    switch (surfby) {
      case 'name': {
        return [...value].sort((a, b) => a.name.localeCompare(b.name));
      }
      case 'canFly': {
        return [...value].sort((a, b) =>
          b.canFly && !a.canFly ? 1 : !b.canFly && a.canFly ? -1 : 0,
        );
      }
      case 'color': {
        return [...value].sort((a, b) => a.color - b.color);
      }
      case 'creator': {
        return [...value].sort((a, b) => a.creator - b.creator);
      }
      default: {
        return value;
      }
    }
  }
}
