import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-basique',
  templateUrl: './switch-basique.component.html',
  styles: [
  ]
})
export class SwitchBasiqueComponent implements OnInit {
  dispSwitch: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  displayExpSwitch(){
    let div: HTMLElement | null = document.getElementById("expSwitch");
    if (div?.style.display != "none") {
      div ? div.style.display = "none": console.log("error");
      this.dispSwitch = true;
    } else {
      div.style.display = "block";
      this.dispSwitch = false;
    }
  }

}
