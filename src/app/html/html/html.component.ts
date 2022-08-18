import { Component, OnInit } from '@angular/core';
import { HtmlService } from "../html.service";
import { Balise } from "../balise";

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styles: [
    'code { font-weight: gold; }',
    'table td { border: 1px solid white; }',
    '.tabl-bal { margin-bottom: 33px; }',
    '.bals {color: white; }'

  ]
})
export class HtmlComponent implements OnInit {
  balises: Balise [] | undefined;

  constructor(
    private htmlService: HtmlService
  ) { }

  ngOnInit() {
    return this.htmlService.getBalises().subscribe(
      balises => this.balises = balises
    );
  }

}
