import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SwipeAngularListModule } from 'swipe-angular-list-rtl';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    SwipeAngularListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
