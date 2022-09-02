import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-length',
  templateUrl: './length.component.html',
  styles: [
  ]
})
export class LengthComponent implements OnInit {
  nbCaract: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }


  tryLength(calcul: any) {
    this.nbCaract = calcul.length;
  }
}
