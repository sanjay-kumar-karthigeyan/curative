import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorporatewellnessRoutingModule } from './corporatewellness-routing.module';
import { CorporatewellnessBodyComponent } from './corporatewellness-body/corporatewellness-body.component';


@NgModule({
  declarations: [CorporatewellnessBodyComponent],
  imports: [
    CommonModule,
    CorporatewellnessRoutingModule
  ]
})
export class CorporatewellnessModule { }
