import { Component, signal } from '@angular/core';
import { toggleCasePipe } from '../../pipes/toggleCase.pipe';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from '../../pipes/canFly.pipe';
import { ColorPipe } from '../../pipes/color.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [toggleCasePipe, CanFlyPipe, ColorPipe],
  templateUrl: './custom-page.html',
})
export default class CustomPage {
  name = signal('Daniel');
  upper = signal(false);

  heros = signal(heroes);
}
