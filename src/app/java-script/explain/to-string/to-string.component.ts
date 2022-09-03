import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-string',
  templateUrl: './to-string.component.html',
  styles: [
  ]
})
export class ToStringComponent implements OnInit {
  myArray: any[] | undefined = [];
  arrayToString: any;
  typeMyArray: any;
  convertString: string | undefined;
  typeConvertString: any;

  ngOnInit(): void {
  }


  tryToString(convert: any) {
    this.convertString = convert.toString();
    this.myArray?.push(convert);
    this.consoletypeof();
  }

  consoletypeof(){
    this.typeConvertString = typeof this.convertString;
    this.arrayToString = this.myArray?.toString();
    this.typeMyArray = typeof this.arrayToString;
  }
}
