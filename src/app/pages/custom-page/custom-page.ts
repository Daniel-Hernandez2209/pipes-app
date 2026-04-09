import { Component, signal } from '@angular/core';
import { toggleCasePipe } from '../../pipes/toggleCase.pipe';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from '../../pipes/canFly.pipe';
import { ColorPipe } from '../../pipes/color.pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { creatorPipe } from '../../pipes/hero-creator.pipe';
import { heroSorBYfPipe } from '../../pipes/hero-sorfby.pipe';
import { Hero } from '../../interfaces/hero.interface';
import { heroFilterPipe } from '../../pipes/hero-filter.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    toggleCasePipe,
    CanFlyPipe,
    ColorPipe,
    HeroTextColorPipe,
    creatorPipe,
    heroSorBYfPipe,
    heroFilterPipe,
  ],
  templateUrl: './custom-page.html',
})
export default class CustomPage {
  name = signal('Daniel');
  upper = signal(false);

  heros = signal(heroes);
  surfby = signal<keyof Hero | null>(null);
  search = signal('');
}
