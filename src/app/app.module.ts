import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedbackComponent } from './feedback/feedback.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SubsribeComponent } from './subsribe/subsribe.component';
import {HttpClientModule} from '@angular/common/http';
import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    SubsribeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
