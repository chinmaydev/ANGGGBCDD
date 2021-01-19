import { Component, OnInit } from '@angular/core';

import {Product} from './product'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  interpolation : string = "Interpolation!!!";
  title =  "AAA";
  disabled : boolean =false;
  tableHeight ="200px";

  product  = {name : "Samsung", price :11000.99, quantity : 2,instock :true , photo :"assets/product.png"};

  constructor() { }

  ngOnInit(): void {
  }

  getTotal() : number{
    return this.product.price * this.product.quantity;
  }

  productList : Product[] = [new Product("Samsung",100000,true),new Product("Motorola",110000,true),new Product("Blackberry",120000,false)];

  productObj : Product = new Product("Samsung",100000,true);

  backEffectEnable : boolean = true;

}

