import { Component, OnInit } from '@angular/core';
import { LangageService } from "../langage.service";
import { Langage } from "../langage";
import { Router } from "@angular/router";



@Component({
  selector: 'app-bar-nav-langage',
  templateUrl: './bar-nav-langage.component.html',
  styleUrls: ['./bar-nav-langage.component.scss']
})
export class BarNavLangageComponent implements OnInit {
  langages: Langage[] | undefined;
  titres: any;
  page: string | undefined;
  show = true;

  constructor(
    private langageService: LangageService,
    private router: Router
  ) {
    this.page = undefined;
  }

  ngOnInit() {
    this.langageService.getLangages().subscribe(
      langagesList => this.langages = langagesList
    )
    this.page;
  }

  goToLangage(lang: Langage){
    this.router.navigate([`${lang.name}`]);
  }

  displayTitle(lang: Langage) {
    this.page = lang.name

    if (this.page){
      this.langageService.getTitre(lang.route).subscribe(
        titres => this.titres = titres
      )
    }else {
      this.titres = undefined;
    }
  }
}
