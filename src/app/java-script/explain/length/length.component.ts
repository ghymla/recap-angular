import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-length',
  templateUrl: './length.component.html',
  styles: [
  ]
})
export class LengthComponent implements OnInit {
  nbCaract: number | undefined;
  dispNon: boolean = false;

  ngOnInit(): void {
  }


  tryLength(calcul: any) {
    this.nbCaract = calcul.length;
  }

  displayExpLength(){
    let div: HTMLElement | null = document.getElementById("expLength");
    if (div?.style.display != "none") {
      div ? div.style.display = "none": console.log("error");
      this.dispNon = true;
    } else {
      div.style.display = "block";
      this.dispNon = false;
    }
  }
}
