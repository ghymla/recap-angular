import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarNavLangageComponent } from './nav-langages/bar-nav-langage/bar-nav-langage.component';
import { NavLangagesModule } from './nav-langages/nav-langages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavLangagesModule
  ],
  providers: [],
  bootstrap: [AppComponent, BarNavLangageComponent]
})
export class AppModule { }
