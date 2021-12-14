import { Component, OnInit } from '@angular/core';
import { Currencies } from './currencies.model';
import { CurrenciesService } from '../currencies.service'

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {

  // selectedOption: string;
  // printedOption: string;

  currencies: Currencies[] = [];

  cryptos = [ "BTC", "ETH", "DOGE", "LTC", "VET" ];
  
  fiats = ["USD", "EUR"]
  //dependency injection
  constructor(private currenciesService: CurrenciesService) { }

  ngOnInit(): void {
    this.currenciesService.getCurrencies().subscribe(payload => {
      this.currencies = payload;
      console.log(this.currencies);
    });
    
  }

}
