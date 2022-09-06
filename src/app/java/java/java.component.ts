import { Component, OnInit } from '@angular/core';
import { LangageService } from "../../nav-langages/langage.service";
import { javaTitre } from "../javaTitre";

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.scss']
})
export class JavaComponent implements OnInit {
  titres: javaTitre[] | undefined;

  constructor(
    private languageService: LangageService
  ) { }

  ngOnInit(): void {
    this.getTitre()
  }

  getTitre() {
    this.languageService.getTitre("java").subscribe(
      titles => this.titres = titles
    )
  }
}
