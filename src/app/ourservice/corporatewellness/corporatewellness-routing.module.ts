import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorporatewellnessBodyComponent } from './corporatewellness-body/corporatewellness-body.component'


const routes: Routes = [
  {
    path:'',component:CorporatewellnessBodyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorporatewellnessRoutingModule { }
