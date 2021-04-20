import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelBoxBodyComponent } from './model-box-body/model-box-body.component';



@NgModule({
  declarations: [ModelBoxBodyComponent],
  imports: [
    CommonModule
  ],
  exports:[ModelBoxBodyComponent]
})
export class ModelBoxModule { }
