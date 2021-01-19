import { Component, OnInit } from '@angular/core';
import { CaptchaServiceService } from '../services/captcha-service.service';

@Component({
  selector: 'test-service',
  templateUrl: './test-service.component.html',
  styleUrls: ['./test-service.component.css']
})
export class TestServiceComponent implements OnInit {

  constructor(private captchaServiceService : CaptchaServiceService) {
    this.newCode();
   }

  ngOnInit(): void {
  }

  captchaValue : string = "aaa";
  currentCaptcha : string;
  validation : boolean = false;

  newCode() : string{
    this.currentCaptcha = this.captchaServiceService.generateCode();
    return this.currentCaptcha;
  }

  validate() : boolean{    
    return this.validation = (this.captchaValue == this.currentCaptcha) ;
  }
}
