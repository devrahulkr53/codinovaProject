import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cart } from '../cart/state/cart.interface';
import { getCart } from '../cart/state/cart.selectors';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent implements OnInit {

  @Output() proceedClicked:EventEmitter<any> = new EventEmitter<any>();
  @Input() receiptData:any;
  cart:Observable<Cart[]>;
  cartLength:number = 0;
  subTotal:number = 0;
  vat:number = 0;
  discount:number = 0;
  date:Date = new Date();
  constructor(private store: Store<{ cart: Cart }>) {
    this.cart = this.store.select(getCart)
    store.select(getCart).subscribe(res=>{
      this.subTotal = res.map(e=>+e.price * e.quantity).reduce((a,b)=>+a+b, 0)
      this.cartLength = res.length;
    })
  }

  ngOnInit(): void {
    console.log(this.receiptData)
  }

  onClose(){
    this.proceedClicked.emit(null)
  }
}
