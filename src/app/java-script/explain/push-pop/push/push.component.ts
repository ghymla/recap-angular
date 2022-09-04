import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-push',
  templateUrl: './push.component.html',
  styles: [
  ]
})
export class PushComponent implements OnInit {
  userArray: string[] | undefined;
  displayArray: string | undefined;

  ngOnInit(): void {
  }

  createArray(creat: string){
    this.userArray = creat.split(' ');
  }

  addToArray(add: string){
    this.userArray?.push(add);
    this.displayArray = this.userArray?.toString();
  }
}
