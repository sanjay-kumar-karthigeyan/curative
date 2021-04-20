import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactBodyComponent } from './contact-body/contact-body.component'; 


const routes: Routes = [
  {
    path:'',component:ContactBodyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
