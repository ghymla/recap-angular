import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarNavLangageComponent } from './bar-nav-langage/bar-nav-langage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';




@NgModule({
  declarations: [
    BarNavLangageComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class NavLangagesModule {
  constructor(library: FaIconLibrary){
    library.addIconPacks(fas, far, fab);
  }
}
