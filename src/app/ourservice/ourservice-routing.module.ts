import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OurserviceBodyComponent } from './ourservice-body/ourservice-body.component';


const routes: Routes = [
  {
    path:'',component: OurserviceBodyComponent,
      children:[
        {
          path:'physiotherapy',loadChildren:(()=> import('./physiotherapy/physiotherapy.module').then(mod => mod.PhysiotherapyModule))
        },
        {
          path:'rehabilation',loadChildren:(()=> import('./rehabilation/rehabilation.module').then(mod => mod.RehabilationModule))
        }
        ,{
          path:'fitness',loadChildren: (()=> import('./fitness/fitness.module').then(mod => mod.FitnessModule))
        }
        ,{
          path:'corporatewellness',loadChildren: (()=> import('./corporatewellness/corporatewellness.module').then(mod => mod.CorporatewellnessModule))
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurserviceRoutingModule { }
