import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryBodyComponent } from './gallery-body/gallery-body.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgxGalleryModule } from 'ngx-gallery';

@NgModule({
  declarations: [GalleryBodyComponent,CarouselComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    NgxGalleryModule
  ]
})
export class GalleryModule { }
