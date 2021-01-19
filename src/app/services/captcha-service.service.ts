import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaptchaServiceService {

  constructor() { }
   
  generateCode() : string{
  let num1 = Math.random()*10;
  let num2 = Math.random()*10;
  let num3 = Math.random()*10;
  let num4 = Math.random()*10;

  let code= Math.round(num1)+" "+Math.round(num2)+" "+Math.round(num3)+" "+Math.round(num4);
  return code
}
}
