import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-events-demo',
  templateUrl: './events-demo.component.html',
  styleUrls: ['./events-demo.component.css']
})
export class EventsDemoComponent implements OnInit {
  
  public  isVisible = true;
  public  positionX;
  public positionY;
  public floatingObject;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(){
    console.log("Inside change");
  }

  onClick(){
    console.log("Inside click");
  }

  showImage(){
    this.isVisible = !this.isVisible;
  }

  animate(event){
    this.positionY= event.clientY;
    this.positionX= event.clientX;
    

    this.floatingObject = {
      'position' : "fixed",
      "left" :this.positionX+"px",
      "top" :this.positionY+"px"                                                                                                                                       
    }
    console.log(this.floatingObject);
    console.log(typeof event);
  }

  cars = [{name :"Audi",photo :"/assets/audi.jpg","likes":0,"dislikes":0},{name :"BMW",photo :"/assets/bmw.jpg","likes":0,"dislikes":0}];

  likesCounter(car){
     car.likes ++;
  }
  disLikesCounter(car){
    car.dislikes ++;
 }


 twoWayBindingIP :string = "Chinmaya";
 
 onClickBind(event){
 this.twoWayBindingIP = event.target.value;
 console.log(this.twoWayBindingIP);
 }

//ngModel
prodList : Product[] = [{id : 1,name :"Audi",mfgDate : new Date("25/06/2020"),price : 1000000},
{id : 2,name :"BMW",mfgDate : new Date("25/04/2020"),price : 1000000}];

prodName : string;
prodPrice : number;
mfgDate : Date;

addProduct(){
  console.log("inside add");
  let product  = new Product();
    product.name =this.prodName;
    product.price = this.prodPrice;
    product.mfgDate =this.mfgDate;
    product.id = this.prodList.length +1;
  this.prodList.push(product);
}

removeProduct(prodId : number){
  console.log("Inside removeProduct")
  let i :number;
  for(i = 0; i <this.prodList.length ; i++){
    let product  = this.prodList[i];
     if(product.id === prodId){
      this.prodList.splice(i,1);
     }
  }
}


}
