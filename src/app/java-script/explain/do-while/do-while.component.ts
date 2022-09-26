import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-do-while',
  templateUrl: './do-while.component.html',
  styles: [
  ]
})
export class DoWhileComponent implements OnInit {
  dispNon: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  displayExpDoWile() {
    // je créé une varible div qui sera de type HTML ou null et je lui injecte la div ID
    let div: HTMLElement | null = document.getElementById("expDoWile");
    // si j'ai une div qui a un display css !=none
    if (div?.style.display != "none") {
      // je change le display en none
      div ? div.style.display = "none" : console.log("error");
      this.dispNon = true;
    } else {
      // sinon je met le display a block
      div.style.display = "block";
      this.dispNon = false;
    }
  }
}
