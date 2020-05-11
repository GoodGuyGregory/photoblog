// Import global stylesheet
import './styles/main.css';

// imports modules needed to bootstrap application
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// bootstraps module and attached it to webpafe
platformBrowserDynamic().bootstrapModule(AppModule);