import { Component, OnInit } from '@angular/core';
import { LangageService } from "../../nav-langages/langage.service";
import { JavaScriptService } from "../java-script.service";
import { JavaScriptTitre } from "../javaScriptTitre";
import { JSContent } from "../JSContent";
import { jsMethode } from "../JSMethode";

@Component({
  selector: 'app-java-script',
  templateUrl: './java-script.component.html',
  styleUrls: ['./java-script.component.scss']
})
export class JavaScriptComponent implements OnInit {
  titres: JavaScriptTitre [] | undefined;
  langage: string = "javaScript";
  contents: JSContent [] | undefined;
  methods: jsMethode [] | undefined;


  constructor(
    private langageService: LangageService,
    private jsService: JavaScriptService
  ) { }

  ngOnInit() {
    this.getTitres()
    this.getContent()
    this.getMethods()
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

  getMethods() {
    this.jsService.getJSMethods().subscribe(
      methods => this.methods = methods
    )
  }
}
