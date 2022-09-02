import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavaScriptComponent } from './java-script/java-script.component';
import { ToCaseComponent } from './explain/to-case/to-case.component';
import { ReplaceComponent } from './explain/replace/replace.component';
import { LengthComponent } from './explain/length/length.component';



@NgModule({
  declarations: [
    JavaScriptComponent,
    ToCaseComponent,
    ReplaceComponent,
    LengthComponent
  ],
  imports: [
    CommonModule
  ]
})
export class JavaScriptModule { }
