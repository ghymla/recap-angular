import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNoFoundComponent } from "./page-no-found/page-no-found.component";
import { HtmlComponent } from "./html/html/html.component";
import { CssComponent } from './css/css/css.component';
import { JavaScriptComponent } from './java-script/java-script/java-script.component';
import { JavaComponent } from "./java/java/java.component";
import { GitComponent } from "./git/git/git.component";

const routes: Routes = [
  {path: 'html', component: HtmlComponent },
  {path: 'css' , component: CssComponent},
  {path: 'Java Script' , component: JavaScriptComponent},
  {path: 'java' , component: JavaComponent},
  {path: 'git' , component: GitComponent},
  {path: '**', component: PageNoFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
