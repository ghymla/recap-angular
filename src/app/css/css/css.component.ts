import { Component, OnInit } from '@angular/core';
import {  CssService } from "../css.service";
import { cssProp } from "../cssProp";

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.scss']
})
export class CssComponent implements OnInit {
  proplist: cssProp [] | undefined;

  constructor(
    private cssService: CssService
  ) { }

  ngOnInit() {
    this.getPropList()
  }

  getPropList() {
    this.cssService.getCssProps().subscribe(
      proplist => this.proplist = proplist
    )
  }
}
