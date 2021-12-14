import { Injectable } from '@angular/core';
import { CurrenciesComponent } from './currencies/currencies.component';
import { Currencies } from './currencies/currencies.model';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    // const data = this.http.get(`https://rest.coinapi.io/v1/exchangerate/${crypto}/${currency}?${api_key}`);
    const dataHard = this.http.get(`https://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=${api_key}`);

    const res = dataHard
    console.log(res)
    return res
  }
  
}

// const data = [
//   {
//       "asset_id": "BTC",
//       "name": "Bitcoin",
//       "type_is_crypto": 1,
//       "data_quote_start": "2014-02-24T17:43:05.0000000Z",
//       "data_quote_end": "2021-12-14T16:09:30.6235298Z",
//       "data_orderbook_start": "2014-02-24T17:43:05.0000000Z",
//       "data_orderbook_end": "2020-08-05T14:38:38.3413202Z",
//       "data_trade_start": "2010-07-17T23:09:17.0000000Z",
//       "data_trade_end": "2021-12-14T16:11:35.6800000Z",
//       "data_symbols_count": 72310,
//       "volume_1hrs_usd": 11579365988865.90,
//       "volume_1day_usd": 470747458271880.15,
//       "volume_1mth_usd": 20881088074830272.25,
//       "price_usd": 46790.644524684008454879935198,
//       "id_icon": "4caf2b16-a017-4e26-a348-2cea69c34cba",
//       "data_start": "2010-07-17",
//       "data_end": "2021-12-14"
//   },
//   {
//       "asset_id": "USD",
//       "name": "US Dollar",
//       "type_is_crypto": 0,
//       "data_quote_start": "2014-02-24T17:43:05.0000000Z",
//       "data_quote_end": "2021-12-14T16:09:28.7657585Z",
//       "data_orderbook_start": "2014-02-24T17:43:05.0000000Z",
//       "data_orderbook_end": "2020-08-05T14:38:00.7082850Z",
//       "data_trade_start": "2010-07-17T23:09:17.0000000Z",
//       "data_trade_end": "2021-12-14T16:11:35.6750000Z",
//       "data_symbols_count": 92461,
//       "volume_1hrs_usd": 2720541586217.88,
//       "volume_1day_usd": 58555155433006.95,
//       "volume_1mth_usd": 2074423651948082.78,
//       "price_usd": 1,
//       "id_icon": "0a4185f2-1a03-4a7c-b866-ba7076d8c73b",
//       "data_start": "2010-07-17",
//       "data_end": "2021-12-14"
//   }];
// return data