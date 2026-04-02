import { Injectable, signal } from '@angular/core';

export type availibleLocales = 'de' | 'es' | 'en';

@Injectable({ providedIn: 'root' })
export class LocalService {
  private currentLocale = signal<availibleLocales>('es');
  constructor() {
    const savedLocale = localStorage.getItem('locale') as availibleLocales;
    // Validar que el locale guardado sea válido, si no, usar 'es'
    if (savedLocale === 'de' || savedLocale === 'es' || savedLocale === 'en') {
      this.currentLocale.set(savedLocale);
    } else {
      localStorage.removeItem('locale');
      this.currentLocale.set('es');
    }
  }

  get getLocale() {
    return this.currentLocale();
  }

  changeLocale(locale: availibleLocales) {
    localStorage.setItem('locale', locale);
    this.currentLocale.set(locale);
    window.location.reload();
  }
}
