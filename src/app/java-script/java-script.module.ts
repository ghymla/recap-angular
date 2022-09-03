import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavaScriptComponent } from './java-script/java-script.component';
import { ToCaseComponent } from './explain/to-case/to-case.component';
import { ReplaceComponent } from './explain/replace/replace.component';
import { LengthComponent } from './explain/length/length.component';
import { NumberComponent } from './explain/number/number.component';
import { ToStringComponent } from './explain/to-string/to-string.component';
import { FromComponent } from './explain/from/from.component';



@NgModule({
  declarations: [
    JavaScriptComponent,
    ToCaseComponent,
    ReplaceComponent,
    LengthComponent,
    NumberComponent,
    ToStringComponent,
    FromComponent
  ],
  imports: [
    CommonModule
  ]
})
export class JavaScriptModule { }
