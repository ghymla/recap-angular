import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarNavLangageComponent } from './nav-langages/bar-nav-langage/bar-nav-langage.component';
import { NavLangagesModule } from './nav-langages/nav-langages.module';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    PageNoFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // FontAwesomeModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    AppRoutingModule,
    NavLangagesModule
  ],
  providers: [],
  bootstrap: [AppComponent, BarNavLangageComponent]
})
export class AppModule { }
