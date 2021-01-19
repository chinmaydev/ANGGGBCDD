import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { EventsDemoComponent } from './events-demo/events-demo.component';
import { IterationComponent } from './iteration/iteration.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TestServiceComponent } from './test-service/test-service.component';
import { CaptchaServiceService } from './services/captcha-service.service';
import { RestConsumptionComponent } from './rest-consumption/rest-consumption.component';
import { ConfigComponent } from './config/config.component';
import { FormdemoComponent } from './formdemo/formdemo.component';
import { RoutingModule } from './routing/routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Formdemo2Component } from './formdemo2/formdemo2.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EventsDemoComponent,
    IterationComponent,
    PipeDemoComponent,
    ParentComponent,
    ChildComponent,
    TestServiceComponent,
    RestConsumptionComponent,
    ConfigComponent,
    FormdemoComponent,
    PageNotFoundComponent,
    Formdemo2Component
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,FormsModule,
  /*   RouterModule.forRoot([
      {path : "formDemo",component : FormdemoComponent},
      {path : "",redirectTo:"/formDemo",pathMatch:"full"}]) // by defult formDemo will open 
      MOved to RoutingModule
      */  RoutingModule,ReactiveFormsModule
] ,
  providers: [
    CaptchaServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
