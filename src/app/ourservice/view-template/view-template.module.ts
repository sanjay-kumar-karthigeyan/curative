import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharePageComponent } from './share-page/share-page.component';



@NgModule({
  declarations: [SharePageComponent],
  imports: [
    CommonModule
  ],
  exports:[
    SharePageComponent
  ]
})
export class ViewTemplateModule { }
