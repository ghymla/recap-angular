import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-case',
  templateUrl: './to-case.component.html',
  styleUrls: ['./to-case.component.scss']
})
export class ToCaseComponent implements OnInit {
  transfUp: string | undefined;
  transfMin: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  userTryUp(upper: string) {
    this.transfUp = upper.toUpperCase();
  }

  userTryMin(lower: string) {
    this.transfMin = lower.toLowerCase();
    console.log (this.transfMin);
  }
}
