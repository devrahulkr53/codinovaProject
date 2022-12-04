import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { ReceiptComponent } from './components/receipt/receipt.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './components/cart/state/cart.reducers';
import { NgxMaskModule, IConfig } from 'ngx-mask'

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CartComponent,
    ProductsComponent,
    ReceiptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({cart: cartReducer}),
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
