import { Component, OnInit } from '@angular/core';
import { LangageService } from "../langage.service";
import { Langage } from "../langage";
import { HtmlTitre } from "../../html/htmlTitre";
import { Router } from "@angular/router";



@Component({
  selector: 'app-bar-nav-langage',
  templateUrl: './bar-nav-langage.component.html',
  styleUrls: ['./bar-nav-langage.component.scss']
})
export class BarNavLangageComponent implements OnInit {
  langages: Langage[] | undefined;
  titres: any;

  constructor(
    private langageService: LangageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.langageService.getLangages().subscribe(
      langagesList => this.langages = langagesList
    )
    this.langageService.getHtmlTitre().subscribe(
      titres => this.titres = titres
    )
  }

  goToLangage(lang: Langage){
    this.router.navigate([`${lang.name}`]);
  }

}
