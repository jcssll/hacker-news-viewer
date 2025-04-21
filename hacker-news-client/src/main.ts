import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent,{
  ... appConfig, //existing config
  providers:[
    ...(appConfig.providers || [] ), // preserving the existing providers
    provideHttpClient()// the new provider
  ]
})
  .catch((err) => console.error(err));
