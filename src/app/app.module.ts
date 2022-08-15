import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { MiddleAccueilComponent } from './middle-accueil/middle-accueil.component';
import { LeftComponent } from './left/left.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WeatherWidgetMainComponent } from './weather-widget-main/weather-widget-main.component';
import { TranslationComponent } from './translation/translation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    MiddleAccueilComponent,
    LeftComponent,
    WeatherWidgetMainComponent,
    TranslationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
