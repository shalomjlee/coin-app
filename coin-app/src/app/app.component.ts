import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  apiKey:string = "C9EA2FE5-0E84-44FE-9C7C-C04848EFA5E4";
  title:string = "coin-app";
  // cryptoOption: string;
  coinSearch:string = "BTC"
  listOfCryptos:string[] = ["BTC", "ETH", "LTC", "DOGE", "VET"]
  listOfCurrencies: string[] = ["USD", "EUR", "GBP", "GBP", "KRW" ]
  
}
