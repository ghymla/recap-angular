import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-no-found',
  template: `
    <div class="pos">
      <img src="../../assets/img/wall-E.png" alt="Wall E" width="56%" height="56%" class="img-perdu">
    </div>
  `,
  styles: [
    '.img-perdu { margin-left: 30%; margin-top: 10px; }'
  ]
})
export class PageNoFoundComponent implements OnInit {


  ngOnInit(): void {
  }

}
