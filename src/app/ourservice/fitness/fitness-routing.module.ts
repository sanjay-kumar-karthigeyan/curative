import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FitnessBodyComponent } from './fitness-body/fitness-body.component';
import { FunctionalfitnessComponent } from './fitness-body/functionalfitness/functionalfitness.component'
import { GeneralfitnessComponent } from './fitness-body/generalfitness/generalfitness.component';
import { GeriaticComponent } from './fitness-body/geriatic/geriatic.component';
import { SportsfitnessComponent } from './fitness-body/sportsfitness/sportsfitness.component';
import { WeightmanagementComponent } from './fitness-body/weightmanagement/weightmanagement.component'

const routes: Routes = [ 
  {
    path:'',component: FitnessBodyComponent
  },
  {
    path:'generalfitness',component: GeneralfitnessComponent
  },
  {
    path:'sportsfitness',component: SportsfitnessComponent
  },
  {
    path:'functionalfitness',component: FunctionalfitnessComponent
  },
  {
    path:'geriatic',component: GeriaticComponent
  },
  {
    path:'weightmanagement',component: WeightmanagementComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FitnessRoutingModule { }
