import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormdemoComponent } from '../formdemo/formdemo.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';


 const routes : Routes = [
  {path : "formDemo",component : FormdemoComponent},
  {path : "",redirectTo:"/formDemo",pathMatch:"full"},// by defult formDemo will open
  {path : "**",component : PageNotFoundComponent} // wildcard
]  ;

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class RoutingModule { }
