import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styles: [
  ]
})
export class NumberComponent implements OnInit {
  toNumber: number | undefined;
  toType: any;

  ngOnInit(): void {
  }

  tryNumber(string: string) {
    this.toType = typeof(Number(string));
    this.toNumber = Number(string);
  }
}
