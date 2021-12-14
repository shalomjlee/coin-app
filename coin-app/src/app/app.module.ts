import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CryptocurrenciesComponent } from './cryptocurrencies/cryptocurrencies.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { DisplayCurrencyComponent } from './display-currency/display-currency.component';

@NgModule({
  declarations: [
    AppComponent,
    CryptocurrenciesComponent,
    CurrenciesComponent,
    DisplayCurrencyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
