import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iteration',
  templateUrl: './iteration.component.html',
  styleUrls: ['./iteration.component.css']
})
export class IterationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public products = [{id:1,name:"Chinmaya"},{id:2,name:"Chinmaya"},{id:3,name:"Chinmaya"},{id:4,name:"Chinmaya"}];

  trackById(index,item){
    return item.id;
  }

}
