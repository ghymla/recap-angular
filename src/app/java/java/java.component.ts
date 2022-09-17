import { Component, OnInit } from '@angular/core';
import { LangageService } from "../../nav-langages/langage.service";
import { JavaService } from "../java.service";
import { javaTitre } from "../javaTitre";
import { ContentJava } from "../contentJava";

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.scss']
})
export class JavaComponent implements OnInit {
  titres: javaTitre[] | undefined;
  contents: ContentJava[] | undefined;
  displayChapitre: string | undefined;

  constructor(
    private languageService: LangageService,
    private javaService: JavaService
  ) { }

  ngOnInit(): void {
    this.getTitre()
    this.getContent()
  }

  getTitre() {
    this.languageService.getTitre("java").subscribe(
      titles => this.titres = titles
    )
  }

  getContent() {
    this.javaService.getContent().subscribe(
      contents => this.contents = contents
    )
  }

  displayExplain(chapitre: string) {
    this.displayChapitre = chapitre;
  }
}
