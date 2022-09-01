import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavaScriptComponent } from './java-script/java-script.component';
import { ToCaseComponent } from './explain/to-case/to-case.component';



@NgModule({
  declarations: [
    JavaScriptComponent,
    ToCaseComponent
  ],
  imports: [
    CommonModule
  ]
})
export class JavaScriptModule { }
