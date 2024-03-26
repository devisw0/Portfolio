import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HeroesComponent } from './app/heroes/heroes.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
