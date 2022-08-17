import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styles: [
    'code { font-weight: gold; }',
    'table td { border: 1px solid white; }'

  ]
})
export class HtmlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
