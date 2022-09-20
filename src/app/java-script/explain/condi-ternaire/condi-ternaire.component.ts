import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condi-ternaire',
  templateUrl: './condi-ternaire.component.html',
  styles: [
  ]
})
export class CondiTernaireComponent implements OnInit {
  dispNon: boolean = false;

  ngOnInit(): void {
  }

  displayExpFor(){
    // je créé une varible div qui sera de type HTML ou null et je lui injecte la div ID
    let div: HTMLElement | null = document.getElementById("expIfTernaire");
    // si j'ai une div qui a un display css !=none
    if (div?.style.display != "none") {
      // je change le display en none
      div ? div.style.display = "none": console.log("error");
      this.dispNon = true;
    } else {
      // sinon je met le display a block
      div.style.display = "block";
      this.dispNon = false;
    }
  }
}
