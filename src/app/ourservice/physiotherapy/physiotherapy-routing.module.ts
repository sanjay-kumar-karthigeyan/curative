import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhysiotherapyBodyComponent } from './physiotherapy-body/physiotherapy-body.component'


const routes: Routes = [
  {
    path:'',component:PhysiotherapyBodyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhysiotherapyRoutingModule { }
