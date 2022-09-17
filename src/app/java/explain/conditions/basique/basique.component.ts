import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basique',
  templateUrl: './basique.component.html',
  styles: [
  ]
})
export class BasiqueComponent implements OnInit {
  dispCondi: boolean = false;
  ageLegalDriver: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  displayExpCondi(){
    let div: HTMLElement | null = document.getElementById("expCondi");
    if (div?.style.display != "none") {
      div ? div.style.display = "none": console.log("error");
      this.dispCondi = true;
    } else {
      div.style.display = "block";
      this.dispCondi = false;
    }
  }

  legalAgeDrive(age: string) {
    var ageNumber: Number = +age;
    if ( ageNumber < 16) {
      this.ageLegalDriver = "Trop jeune pour conduire";
    } else if ( ageNumber > 15 && ageNumber < 18) {
      this.ageLegalDriver = "La conduite accompagnée est conseiller";
    } else if (ageNumber > 17) {
      this.ageLegalDriver = "Enfin la liberté de la voiture !!";
    } else {
      this.ageLegalDriver = "Ceci n'est pas un chiffre légal !!"
    }
  }
}
