//For
import { ApplicationConfig } from '@angular/core';
//
import { provideRouter } from '@angular/router';
//For
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
