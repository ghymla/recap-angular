import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop',
  templateUrl: './pop.component.html',
  styles: [
  ]
})
export class PopComponent implements OnInit {
  userArray: string[] | undefined;
  displayFullArray: string | undefined;
  popArray: string | undefined;
  dispNon: boolean = false;

  ngOnInit(): void {
  }

  createArray(creat: string){
    this.userArray = creat.split(' ');
    this.displayFullArray = this.userArray.toString();
    this.rmToArray();
  }

  rmToArray(){
    this.userArray?.pop();
    this.popArray = this.userArray?.toString();
  }

  displayExpPop(){
    let div: HTMLElement | null = document.getElementById("expPop");
    if (div?.style.display != "none") {
      div ? div.style.display = "none": console.log("error");
      this.dispNon = true;
    } else {
      div.style.display = "block";
      this.dispNon = false;
    }
  }
}
