import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-replace',
  templateUrl: './replace.component.html',
  styles: [
  ]
})
export class ReplaceComponent implements OnInit {
  replaced: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }


  tryReplace(phrase: string, oldA: any, rep: any) {
    this.replaced = phrase.replace(oldA, rep);
    console.log(phrase);
    console.log(oldA);
    console.log(rep);
  }
}
