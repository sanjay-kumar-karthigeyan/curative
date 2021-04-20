import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurserviceRoutingModule } from './ourservice-routing.module';
import { OurserviceBodyComponent } from './ourservice-body/ourservice-body.component';


@NgModule({
  declarations: [OurserviceBodyComponent],
  imports: [
    CommonModule,
    OurserviceRoutingModule
  ],
  exports:[
  ]
})
export class OurserviceModule { }
