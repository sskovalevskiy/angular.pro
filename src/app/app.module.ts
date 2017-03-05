import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {StoreComponent} from './store/store.component';
import {StoreModule} from './store/store.module';
import {RouterModule} from '@angular/router';
import {CartDetailComponent} from './store/cart-detail/cart-detail.component';
import {CheckoutComponent} from './store/checkout/checkout.component';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
