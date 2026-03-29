import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  imports: [DecimalPipe, CurrencyPipe, PercentPipe],
  templateUrl: './numbers-page.html',
})
export default class NumbersPage {
  number = signal('123456.789');
  number2 = signal('0.25');
  dolares = signal('123456.789');
  porcentaje = signal('0.4856');
}
