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
import { HtmlModule } from './html/html.module';
import { CssModule } from './css/css.module';
import { JavaScriptModule } from './java-script/java-script.module';
import { JavaModule } from "./java/java.module";


@NgModule({
  declarations: [
    AppComponent,
    PageNoFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    AppRoutingModule,
    NavLangagesModule,
    HtmlModule,
    CssModule,
    JavaScriptModule,
    JavaModule
  ],
  providers: [],
  bootstrap: [AppComponent, BarNavLangageComponent]
})
export class AppModule { }
