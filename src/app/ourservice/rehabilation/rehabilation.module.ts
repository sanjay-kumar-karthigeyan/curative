import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RehabilationRoutingModule } from './rehabilation-routing.module';
import { RehabilationBodyComponent } from './rehabilation-body/rehabilation-body.component';
import { RehabilationBodyDirective } from './rehabilation-body.directive';
import { WomensHealthComponent } from './rehabilation-body/rehab-womenhealth/womenshealth.component'

@NgModule({
  declarations: [RehabilationBodyComponent, RehabilationBodyDirective,WomensHealthComponent],
  imports: [
    CommonModule,
    RehabilationRoutingModule
  ]
})
export class RehabilationModule { }
