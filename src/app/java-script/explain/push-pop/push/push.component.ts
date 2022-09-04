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
  dispNon: boolean = false;

  ngOnInit(): void {
  }

  createArray(creat: string){
    this.userArray = creat.split(' ');
  }

  addToArray(add: string){
    this.userArray?.push(add);
    this.displayArray = this.userArray?.toString();
  }

  displayExpPush(){
    let div: HTMLElement | null = document.getElementById("expPush");
    if (div?.style.display != "none") {
      div ? div.style.display = "none": console.log("error");
      this.dispNon = true;
    } else {
      div.style.display = "block";
      this.dispNon = false;
    }
  }
}
