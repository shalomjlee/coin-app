import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cryptocurrencies',
  templateUrl: './cryptocurrencies.component.html',
  styleUrls: ['./cryptocurrencies.component.css']
})
export class CryptocurrenciesComponent implements OnInit {
  
  selectedCrypto: string;
  printedCrypto: string;

  selectCrypto = [
    {crypto: "BTC"},
    {crypto: "ETH"},
    {crypto: "LTC"},
    {crypto: "DOGE"},
    {crypto: "VET"}
  ]
  
  constructor() { }

  ngOnInit(): void {
  }
  

}
