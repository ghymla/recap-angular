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
}
