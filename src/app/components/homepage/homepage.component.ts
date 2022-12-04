import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  products = [
    {
      name: "comuter",
      price: "130",
      category: "computers",
      description: "",
      image: "https://www.shutterstock.com/image-photo/desktop-computer-keyboard-mouse-on-260nw-164253011.jpg"
    },
    {
      name: "sweater",
      price: "1",
      category: "Clothing",
      description: "fashion, clothes , sweater, wool, cardigan,...",
      image: "https://5.imimg.com/data5/QP/RJ/MY-4283662/fancy-baby-sweater-500x500.jpg"
    },
    {
      name: "tie",
      price: "46",
      category: "Clothing",
      description: "fashion, tie, clothes, accessory , accessoire,...",
      image: "https://www.shutterstock.com/image-vector/tie-isolated-on-white-background-260nw-1904024269.jpg"
    },
    {
      name: "jacket",
      price: "190",
      category: "Clothing",
      description: "winter jacket ",
      image: "https://5.imimg.com/data5/YA/BE/MY-40698162/mens-jackets-500x500.jpg"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
