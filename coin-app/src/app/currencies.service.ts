import { Injectable } from '@angular/core';
import { CurrenciesComponent } from './currencies/currencies.component';
import { Currencies } from './currencies/currencies.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class CurrenciesService {

  //as part of flight service, declaring http of type httpclient 
  constructor(private http: HttpClient) { }



  // making the api call to get coin api data
  getCurrencies(): Observable<any> {
    const url = "https://rest.coinapi.io/v1/exchangerate/";
    const api_key = "C9EA2FE5-0E84-44FE-9C7C-C04848EFA5E4" 
    // const data = this.http.get(`https://rest.coinapi.io/v1/exchangerate/${crypto}/USD?${api_key}`);
    const data = this.http.get(`https://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=${api_key}`);
    
    return data
  }
}
