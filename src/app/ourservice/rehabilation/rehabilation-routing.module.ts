import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RehabilationBodyComponent } from './rehabilation-body/rehabilation-body.component';
import { WomensHealthComponent } from './rehabilation-body/rehab-womenhealth/womenshealth.component'

const routes: Routes = [
  {
    path: '', component: RehabilationBodyComponent,
  },
  {
    path: 'womenshealth', component: WomensHealthComponent,
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RehabilationRoutingModule { }
