import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deleteCart, resetCart, updateQuantity } from './state/cart.action';
import { Cart } from './state/cart.interface';
import { getCart } from './state/cart.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart:Observable<Cart[]>;
  cartLength:number = 0;
  subTotal:number = 0;
  vat:number = 0;
  discount:number = 0;
  @Output() proceedClicked:EventEmitter<any> = new EventEmitter<any>()

  constructor(private store: Store<{ cart: Cart }>) {
    this.cart = this.store.select(getCart)
    store.select(getCart).subscribe(res=>{
      this.subTotal = res.map(e=>+e.price * e.quantity).reduce((a,b)=>+a+b, 0)
      this.cartLength = res.length;
    })
  }

  ngOnInit(): void {
  }

  updateQuantity(item:Cart, qty: number){
    if(qty < 1) return;
    let arr = JSON.parse(JSON.stringify(item));
    arr.quantity = qty;
    this.store.dispatch(updateQuantity(arr))
  }

  deleteCart(item:Cart){
    this.store.dispatch(deleteCart(item))
  }

  onProceed(){
    this.proceedClicked.emit({vat: this.vat, discount: this.discount})
  }

  onCancel(){
    this.store.dispatch(resetCart())
  }
}
