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
}
