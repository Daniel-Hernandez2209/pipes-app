import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import localeAleman from '@angular/common/locales/de-AT';
import localeEs from '@angular/common/locales/es-PR';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs, 'es');
registerLocaleData(localeAleman, 'de-AT');

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    {
      provide: LOCALE_ID,
      useValue: 'de-AT',
    },
  ],
};
