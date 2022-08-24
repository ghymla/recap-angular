import { Component, OnInit } from '@angular/core';
import { LangageService } from "../../nav-langages/langage.service";
import { JavaScriptService } from "../java-script.service";
import { JavaScriptTitre } from "../javaScriptTitre";
import { JSContent } from "../JSContent";

@Component({
  selector: 'app-java-script',
  templateUrl: './java-script.component.html',
  styleUrls: ['./java-script.component.scss']
})
export class JavaScriptComponent implements OnInit {
  titres: JavaScriptTitre [] | undefined;
  langage: string = "javaScript";
  contents: JSContent [] | undefined;

  constructor(
    private langageService: LangageService,
    private jsService: JavaScriptService
  ) { }

  ngOnInit() {
    this.getTitres()
    this.getContent()
  }


  getTitres() {
    this.langageService.getTitre(this.langage).subscribe(
      titres => {
        this.titres = titres;
        this.titres?.forEach((element: { titre: string; }) => {
          console.log(element.titre)
        });
      }
    )
  }

  getContent() {
    this.jsService.getJSContent().subscribe(
      contents => this.contents = contents
    )
  }
}
