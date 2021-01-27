import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http : HttpClient) { }

  options = {observe : "response" as const};
  workspce ="local - 1";

  getConfig(){
    return this.http.get("http://localhost:9091/testing/get/2");
  }

  getAll(){
    return this.http.get("http://localhost:9091/testing/getAll");
  }

  getResponseBody(){
     return this.http.get<Config[]>("http://localhost:9091/testing/getAll",this.options)
  }

}
