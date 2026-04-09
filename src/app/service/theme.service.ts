import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  // 1. Signal que guarda el tema actual (por defecto 'business')
  currentTheme = signal<string>('business');

  constructor() {
    // 2. Cargamos el tema guardado en localStorage si existe
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.currentTheme.set(savedTheme);
      console.log(`Tema cargado desde localStorage: ${savedTheme}`);
    }

    // 3. Effect: Cada vez que el signal cambia, actualiza el HTML y el localStorage automáticamente
    effect(() => {
      const theme = this.currentTheme();
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      console.log(`Tema actualizado a: ${theme}`);
    });
  }

  // 4. Método para alternar entre dos temas
  toggleTheme() {
    this.currentTheme.update((theme) => (theme === 'business' ? 'corporate' : 'business'));
    console;
  }
}
