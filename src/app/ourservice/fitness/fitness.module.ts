import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FitnessRoutingModule } from './fitness-routing.module';
import { FitnessBodyComponent } from './fitness-body/fitness-body.component';
import { GeneralfitnessComponent } from './fitness-body/generalfitness/generalfitness.component';
import { SportsfitnessComponent } from './fitness-body/sportsfitness/sportsfitness.component';
import { FunctionalfitnessComponent } from './fitness-body/functionalfitness/functionalfitness.component';
import { GeriaticComponent } from './fitness-body/geriatic/geriatic.component';
import { WeightmanagementComponent } from './fitness-body/weightmanagement/weightmanagement.component'


@NgModule({
  declarations: [FitnessBodyComponent, GeneralfitnessComponent, SportsfitnessComponent, FunctionalfitnessComponent, GeriaticComponent, WeightmanagementComponent],
  imports: [
    CommonModule,
    FitnessRoutingModule
  ]
})
export class FitnessModule { }
