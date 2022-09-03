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

  ngOnInit(): void {
  }

  tryFrom(toArray: string){
    this.convertoArray = Array.from(toArray);
    this.typeArray = typeof this.convertoArray;
  }
}
