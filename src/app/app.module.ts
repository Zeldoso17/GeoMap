import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapsModule } from './maps/maps.module';
import { SearchParamsService } from './maps/services';
import { CookieService } from 'ngx-cookie-service';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MapsModule,
    AuthModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ SearchParamsService, CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
