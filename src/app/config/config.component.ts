import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service';
import { Config } from './config';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  config : Config;
  showTable :boolean = false;
  configList :Config[];

  constructor(private service : ConfigService) { }

  ngOnInit(): void {
    let keys : string[];
    let headers;
   // this.service.getAll().subscribe((data : Config[]) => this.configList = data);
    this.service.getResponseBody().subscribe(resp => {
      keys =resp.headers.keys();
      headers = keys.map((key)=> `${key} : ${resp.headers.get(key)}`);

      let configList   = resp.body;

      for(let item in resp){
        console.log(item +" : "+resp[item]);
      }

      for(let item in headers){
        console.log(item +" : "+headers[item]);
      }
      
     
    }) ; 
   this.showTable = true;
  }
   
  showConfig(){
    this.service.getConfig().subscribe((data :  Config) => this.config ={
         id : data.id,
        name : data.name,
        rank : data.rank
    });
    this.showTable = true;
  }

  showResponse(){

  }


}
