import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrenciesComponent } from './currencies/currencies.component';
import { DisplayCurrencyComponent } from './display-currency/display-currency.component';

const routes: Routes = [{path: "", component: CurrenciesComponent},
{path: "", component: DisplayCurrencyComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
