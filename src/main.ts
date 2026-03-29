import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { registerLocaleData } from '@angular/common';
import localeEsCo from '@angular/common/locales/es-CO';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));

registerLocaleData(localeEsCo, 'es-CO');
