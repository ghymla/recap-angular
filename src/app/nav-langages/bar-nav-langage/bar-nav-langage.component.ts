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

  constructor(
    private langageService: LangageService,
    private router: Router
  ) {}

  ngOnInit() {
   return this.langageService.getLangages().subscribe(
    langagesList => this.langages = langagesList
   )
  }

  goToLangage(lang: Langage){
    // peut etre changer par navigateByUrl(url: string)
    this.router.navigate([`${lang.name}`]);
  }
}
