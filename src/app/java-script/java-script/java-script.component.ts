import { Component, OnInit } from '@angular/core';
import { LangageService } from "../../nav-langages/langage.service";
import { JavaScriptTitre } from "../javaScriptTitre";

@Component({
  selector: 'app-java-script',
  templateUrl: './java-script.component.html',
  styleUrls: ['./java-script.component.scss']
})
export class JavaScriptComponent implements OnInit {
  titres: JavaScriptTitre [] | undefined;
  langage: string = "javaScript";

  constructor(
    private langageService: LangageService
  ) { }

  ngOnInit() {
    this.getTitres()
  }


  getTitres() {
    this.langageService.getTitre(this.langage).subscribe(
      titres => {
        this.titres = titres;
        console.table(`les tiiiiiitres : ${titres}`);
      }
    )
  }
}
