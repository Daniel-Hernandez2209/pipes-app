import { Component, signal } from '@angular/core';
import { Card } from '../../components/card/card';
import { I18nSelectPipe } from '@angular/common';

const cliente1 = {
  name: 'Daniel',
  gender: 'male',
  'edad ': 33,
};

const cliente2 = {
  name: 'Maria',
  gender: 'female',
  'edad ': 28,
};

@Component({
  selector: 'app-uncommon-page',
  imports: [Card, I18nSelectPipe],
  templateUrl: './uncommon-page.html',
})
export default class UncommonPage {
  client = signal(cliente1);
  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeCliente() {
    if (this.client() === cliente1) {
      this.client.set(cliente2);

      return;
    }
    this.client.set(cliente1);
  }
}
