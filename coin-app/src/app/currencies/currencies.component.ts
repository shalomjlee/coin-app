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

  currencies: Currencies[] = [
    
  ];

  cryptos = [ "BTC", "ETH", "DOGE", "LTC", "VET" ];
  
  fiats = ["USD"]


  //dependency injection
  constructor(private currenciesService: CurrenciesService) { }

  ngOnInit(): void {
    this.currenciesService.getCurrencies().subscribe(res => {
      this.currencies = res;
      console.log(this.currencies);
    });
    
  }

}
