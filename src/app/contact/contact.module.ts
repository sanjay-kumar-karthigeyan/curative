import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactBodyComponent } from './contact-body/contact-body.component';
import { PageFooterModule } from '../page-footer/page-footer.module';

@NgModule({
  declarations: [ContactBodyComponent],
  imports: [
    CommonModule,
    PageFooterModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
