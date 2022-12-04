import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { resetCart } from '../cart/state/cart.action';
import { Cart } from '../cart/state/cart.interface';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  isReceiptVisible:any;
  productsArr = [
    {
      id:1,
      name: "comuter",
      price: "130",
      category: "computers",
      description: "",
      image: "https://www.shutterstock.com/image-photo/desktop-computer-keyboard-mouse-on-260nw-164253011.jpg"
    },
    {
      id:2,
      name: "sweater",
      price: "1",
      category: "Clothing",
      description: "fashion, clothes , sweater, wool, cardigan,...",
      image: "https://5.imimg.com/data5/QP/RJ/MY-4283662/fancy-baby-sweater-500x500.jpg"
    },
    {
      id:3,
      name: "tie",
      price: "46",
      category: "Clothing",
      description: "fashion, tie, clothes, accessory , accessoire,...",
      image: "https://www.shutterstock.com/image-vector/tie-isolated-on-white-background-260nw-1904024269.jpg"
    },
    {
      id:4,
      name: "jacket",
      price: "190",
      category: "Clothing",
      description: "winter jacket ",
      image: "https://5.imimg.com/data5/YA/BE/MY-40698162/mens-jackets-500x500.jpg"
    },
  ]

  constructor(private store: Store<{ cart: Cart }>) {}

  ngOnInit(): void {
  }

  onProceedClicked(event:any){
    this.isReceiptVisible = event;
    if(!event){
      this.store.dispatch(resetCart())
    }
  }
}
