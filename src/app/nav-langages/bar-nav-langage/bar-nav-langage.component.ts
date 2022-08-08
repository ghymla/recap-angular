import { Component, OnInit } from '@angular/core';
import { LangageService } from "../langage.service";
import { Langage } from "../langage";

// import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faFilm, fas } from '@fortawesome/free-solid-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';



@Component({
  selector: 'app-bar-nav-langage',
  templateUrl: './bar-nav-langage.component.html',
  styleUrls: ['./bar-nav-langage.component.scss']
})
export class BarNavLangageComponent implements OnInit {
  langages: Langage[] | undefined;
  // faHtml = faHtml5;


  constructor(
    private langageService: LangageService
  ) {
    // library.add(fas, far);
  }

  ngOnInit() {
   return this.langageService.getLangages().subscribe(
    langagesList => this.langages = langagesList
   )
  }

}
