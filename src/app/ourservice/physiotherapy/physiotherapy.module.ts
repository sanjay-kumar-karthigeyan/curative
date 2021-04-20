import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhysiotherapyRoutingModule } from './physiotherapy-routing.module';
import { PhysiotherapyBodyComponent } from './physiotherapy-body/physiotherapy-body.component';
import { ViewTemplateModule } from '../view-template/view-template.module'

@NgModule({
  declarations: [PhysiotherapyBodyComponent],
  imports: [
    ViewTemplateModule,
    CommonModule,
    PhysiotherapyRoutingModule
  ]
})
export class PhysiotherapyModule { }
