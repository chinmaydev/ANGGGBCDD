import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-formdemo',
  templateUrl: './formdemo.component.html',
  styleUrls:['./formdemo.component.css']
})
export class FormdemoComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }

  //public cities =["Hyd","BLR","MUM"];

 // public demoForm;
 
  public age :FormControl  = new FormControl('');
   public reactiveDemo : FormGroup;


  ngOnInit(): void {
  /*   this.reactiveDemo = new FormGroup({
      name : new FormControl(''),
      age : new FormControl(''),
      address : new FormGroup({
        street : new FormControl(''),
        pincode : new FormControl('')
      })
    }); same as below
     */
   this.reactiveDemo = this.formBuilder.group({
      name : [''],
       age :[''],
       address : {
         street : [''],
         pincode : ['']
       }
    });
  }

  onReactiveSubmit() : void{
    console.log(this.reactiveDemo.value);
    this.age.setValue("qaa"); 

    this.reactiveDemo.patchValue({
      name : "ABC",
      address :{
        pincode : "AAA"
      }
    });
  }

/*   onSubmit(obj){
    this.demoForm = obj;
    console.log(JSON.stringify(this.demoForm.value));
  } */

}
