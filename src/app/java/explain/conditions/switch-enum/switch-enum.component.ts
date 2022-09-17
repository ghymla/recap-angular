import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-enum',
  templateUrl: './switch-enum.component.html',
  styles: [
  ]
})
export class SwitchEnumComponent implements OnInit {
  dispSwitchEnum: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  displayExpSwitchEnum(){
    let div: HTMLElement | null = document.getElementById("expSwitchEnum");
    if (div?.style.display != "none") {
      div ? div.style.display = "none": console.log("error");
      this.dispSwitchEnum = true;
    } else {
      div.style.display = "block";
      this.dispSwitchEnum = false;
    }
  }


}
