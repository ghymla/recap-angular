import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-no-found',
  template: `
    <div class="pos">
      <img src="../../assets/img/tortue-imbriquee.jpg" alt=" tortue imbriquée" width="100%" height="100%">
    </div>
  `,
  styles: [
  ]
})
export class PageNoFoundComponent implements OnInit {


  ngOnInit(): void {
  }

}
