import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
})
export class Header {
  // 1. Creamos la señal con el tema inicial (corporate)
  temaActual = signal<string>('corporate');

  constructor() {
    // 2. Este efecto se ejecuta automáticamente cada vez que la señal cambie de valor
    effect(() => {
      const tema = this.temaActual(); // Leemos la señal
      document.documentElement.setAttribute('data-theme', tema);
      console.log('Efecto de Señal disparado. Tema cambiado a:', tema);
    });
  }

  // 3. Función para alternar el valor de la señal
  cambiarTema() {
    this.temaActual.update((temaViejo) => (temaViejo === 'corporate' ? 'business' : 'corporate'));
  }
}
