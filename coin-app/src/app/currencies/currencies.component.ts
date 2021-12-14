import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {

  // selectedOption: string;
  // printedOption: string;

  options = [
    { name: "USD", value: 1},
    { name: "EUR", value: 2},
    { name: "GBP", value: 3},
    { name: "RMB", value: 4},
    { name: "KRW", value: 5}
  ]

  // print() {
  //   this.printedOption = this.selectedOption;
  //   console.log("My input: ", this.selectedOption)
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
