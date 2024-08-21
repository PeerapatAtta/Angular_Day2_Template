import { bootstrapApplication } from '@angular/platform-browser';

// Import AppComponent from app.component.ts
import { AppComponent } from './app/app.component';
//Start page from above
import {
  InMemoryScrollingOptions,
  provideRouter,
  withInMemoryScrolling,
  withViewTransitions
} from '@angular/router';

import { routes } from './app/app.routes';

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      routes, 
      withInMemoryScrolling(scrollConfig),
      withViewTransitions()
    )
  ]
})
  .catch((err) => console.error(err));
