import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageFooterBodyComponent } from './page-footer-body/page-footer-body.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PageFooterBodyComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[PageFooterBodyComponent]
})
export class PageFooterModule { }
