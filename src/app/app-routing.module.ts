import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmartComponent } from './bookmart/bookmart.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [ 
  {path:"", component:HomeComponent}, 
  {path:"bookmark", component:BookmartComponent}, 
];
@NgModule({ 
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule] 
})
export class AppRoutingModule { }