import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { MainComponent } from './app/components/main/main.component';
import { routes } from './app/app-routing.module';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { InterceptorService } from './app/providers/interceptor.service';
registerLocaleData(localeEs);

bootstrapApplication(MainComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: LOCALE_ID,
      useValue: 'es-ES',
    },
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ]
})