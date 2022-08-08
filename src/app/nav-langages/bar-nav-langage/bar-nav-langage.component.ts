import { Component, OnInit } from '@angular/core';
import { LangageService } from "../langage.service";
import { Langage } from "../langage";


@Component({
  selector: 'app-bar-nav-langage',
  templateUrl: './bar-nav-langage.component.html',
  styleUrls: ['./bar-nav-langage.component.scss']
})
export class BarNavLangageComponent implements OnInit {
  langages: Langage[] | undefined;

  constructor(
    private langageService: LangageService
  ) { }

  ngOnInit() {
   return this.langageService.getLangages().subscribe(
    langagesList => this.langages = langagesList
   )
  }

}
