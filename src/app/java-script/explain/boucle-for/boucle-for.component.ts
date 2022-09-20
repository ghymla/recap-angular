import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boucle-for',
  templateUrl: './boucle-for.component.html',
  styles: [
  ]
})
export class BoucleForComponent implements OnInit {
  dispNon: boolean = false;

  ngOnInit(): void {
  }

  displayExpFor(){
    let div: HTMLElement | null = document.getElementById("expFor");
    if (div?.style.display != "none") {
      div ? div.style.display = "none": console.log("error");
      this.dispNon = true;
    } else {
      div.style.display = "block";
      this.dispNon = false;
    }
  }

}
