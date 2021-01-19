import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products=[{name:"Audi","price":11000},{name:"Audi","price":11000},{name:"Audi","price":11000}];

}
