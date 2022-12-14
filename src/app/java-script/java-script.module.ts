import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavaScriptComponent } from './java-script/java-script.component';
import { ToCaseComponent } from './explain/to-case/to-case.component';
import { ReplaceComponent } from './explain/replace/replace.component';
import { LengthComponent } from './explain/length/length.component';
import { NumberComponent } from './explain/number/number.component';
import { ToStringComponent } from './explain/to-string/to-string.component';
import { FromComponent } from './explain/from/from.component';
import { SplitJoinComponent } from './explain/split-join/split-join.component';
import { PushPopComponent } from './explain/push-pop/push-pop/push-pop.component';
import { PushComponent } from './explain/push-pop/push/push.component';
import { PopComponent } from './explain/push-pop/pop/pop.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BoucleForComponent } from './explain/boucle-for/boucle-for.component';
import { CondiIfComponent } from './explain/condi-if/condi-if.component';
import { CondiTernaireComponent } from './explain/condi-ternaire/condi-ternaire.component';
import { SwitchComponent } from './explain/switch/switch.component';
import { WhileComponent } from './explain/while/while.component';
import { DoWhileComponent } from './explain/do-while/do-while.component';



@NgModule({
  declarations: [
    JavaScriptComponent,
    ToCaseComponent,
    ReplaceComponent,
    LengthComponent,
    NumberComponent,
    ToStringComponent,
    FromComponent,
    SplitJoinComponent,
    PushPopComponent,
    PushComponent,
    PopComponent,
    BoucleForComponent,
    CondiIfComponent,
    CondiTernaireComponent,
    SwitchComponent,
    WhileComponent,
    DoWhileComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class JavaScriptModule { }
