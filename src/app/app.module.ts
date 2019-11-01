import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';
import {ImgSliderModule} from './img-slider/img-slider.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ImgSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
