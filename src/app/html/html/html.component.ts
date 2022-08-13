import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styles: [
    'code { font-weight: gold; }'
  ]
})
export class HtmlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
