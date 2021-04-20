import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryBodyComponent } from './gallery-body/gallery-body.component'

const routes: Routes = [
  {
    path:'',component:GalleryBodyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
