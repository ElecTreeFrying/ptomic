import { ServiceWorkerModule } from '@angular/service-worker';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppProviderModule } from './_common/providers/app-provider.module';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AppProviderModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
