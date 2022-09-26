import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JavaComponent } from './java/java.component';
import { BasiqueComponent } from './explain/conditions/basique/basique.component';
import { SwitchEnumComponent } from './explain/conditions/switch-enum/switch-enum.component';
import { SwitchBasiqueComponent } from './explain/conditions/switch-basique/switch-basique.component';
import { ForComponent } from './explain/for/for.component';



@NgModule({
  declarations: [
    JavaComponent,
    BasiqueComponent,
    SwitchEnumComponent,
    SwitchBasiqueComponent,
    ForComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class JavaModule { }
