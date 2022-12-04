import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addCart } from '../cart/state/cart.action';
import { Cart } from '../cart/state/cart.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input() products:any;

  constructor(private store: Store<{ cart: Cart }>) { }
  
  ngOnInit(): void {
  }

  addToCart(item:Cart){
    this.store.dispatch(addCart(item))
  }

}
