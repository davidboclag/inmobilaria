import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { MainComponent } from './app/components/main/main.component';
import { routes } from './app/app-routing.module';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';




bootstrapApplication(MainComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    
  ]
})