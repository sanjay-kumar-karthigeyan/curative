import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'home',loadChildren:()=> import('./home/home.module').then((mod)=> mod.HomeModule )
  },
  {
    path:'service',loadChildren:()=> import('./ourservice/ourservice.module').then(mod=> mod.OurserviceModule)
  },
  {
    path:'gallery',loadChildren:()=> import('./gallery/gallery.module').then((mod)=> mod.GalleryModule )
  },
  {
    path:'contact',loadChildren:()=> import('./contact/contact.module').then((mod)=> mod.ContactModule )
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
