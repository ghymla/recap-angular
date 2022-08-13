import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNoFoundComponent } from "./page-no-found/page-no-found.component";
import { HtmlComponent } from "./html/html/html.component";

const routes: Routes = [
  {path: 'html', component: HtmlComponent },
  {path: '**', component: PageNoFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
