import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


   @Output() event1 : EventEmitter<string> = new EventEmitter<string>();
  

   onComponentClickEvent(){
     console.log("Event is emitted")
     this.event1.emit("From Child Event");
   }

  constructor() { }

  ngOnInit(): void {
  }

  @Input() count : number;

  title = "Child Component";
}
