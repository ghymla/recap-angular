import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-split-join',
  templateUrl: './split-join.component.html',
  styles: [
  ]
})
export class SplitJoinComponent implements OnInit {
  resultToSplit: string[] | undefined;
  resultToJoin: any;
  userArray: string[] | undefined = [];
  displayArray: string | undefined;
  dispNonS: boolean = false;
  dispNonJ: boolean = false;

  ngOnInit(): void {
  }

  trySplit(phrase: string, sepa: string){
    this.resultToSplit = phrase.split(sepa);
  }

  creatArray(add: string) {
    this.userArray?.push(add);
    this.displayArray = this.userArray?.toString();
  }

  tryJoin(jonc: string) {
    this.resultToJoin = this.userArray?.join(jonc);
  }

  displayExpSplit(){
    let div: HTMLElement | null = document.getElementById("expSplit");
    if (div?.style.display != "none") {
      div ? div.style.display = "none": console.log("error");
      this.dispNonS = true;
    } else {
      div.style.display = "block";
      this.dispNonS = false;
    }
  }

  displayExpJoin(){
    let div: HTMLElement | null = document.getElementById("expJoin");
    if (div?.style.display != "none") {
      div ? div.style.display = "none": console.log("error");
      this.dispNonJ = true;
    } else {
      div.style.display = "block";
      this.dispNonJ = false;
    }
  }
}
