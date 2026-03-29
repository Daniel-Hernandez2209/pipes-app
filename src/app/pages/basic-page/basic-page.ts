import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [TitleCasePipe, UpperCasePipe, LowerCasePipe, DatePipe],
  templateUrl: './basic-page.html',
})
export default class BasicPage {
  uppercase = signal('DANIEL');
  lowercase = signal('daniel');
  fullname = signal('DaniEl hErNanDez');

  customDate = signal(new Date());

  tickingTimeEffect = effect((clearIntervalo) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
      console.log('tick');
    }, 1000);

    clearIntervalo(() => clearInterval(interval));
  });
}
