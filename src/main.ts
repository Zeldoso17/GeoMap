import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Mapboxgl from 'mapbox-gl';

Mapboxgl.accessToken = 'pk.eyJ1IjoiemVsZG9zbzE3IiwiYSI6ImNsOGdoaWlrdDAwZnkzb21wM2s5bDY0bHUifQ.xgGm60-WmDQVX-DfxAd7AQ'

if ( !navigator.geolocation ) {
  alert('El navegador no soporta la Geolocalización');
  throw new Error('El navegador no soporta la Geolocalización');
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
