import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { availibleLocales, LocalService } from '../../service/local.service';

@Component({
  selector: 'app-basic-page',
  imports: [TitleCasePipe, UpperCasePipe, LowerCasePipe, DatePipe],
  templateUrl: './basic-page.html',
})
export default class BasicPage {
  localeService = inject(LocalService);
  currentLocale = signal(inject(LOCALE_ID));
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

  changeLocales(locale: availibleLocales) {
    this.localeService.changeLocale(locale);
  }
}
