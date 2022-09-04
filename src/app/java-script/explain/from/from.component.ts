import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styles: [
  ]
})
export class FromComponent implements OnInit {
  convertoArray: string[] | undefined;
  typeArray: any;
  dispNon: boolean = false;

  ngOnInit(): void {
  }

  tryFrom(toArray: string){
    this.convertoArray = Array.from(toArray);
    this.typeArray = typeof this.convertoArray;
  }

  displayExpFrom(){
    let div: HTMLElement | null = document.getElementById("expFrom");
    if (div?.style.display != "none") {
      div ? div.style.display = "none": console.log("error");
      this.dispNon = true;
    } else {
      div.style.display = "block";
      this.dispNon = false;
    }
  }
}
