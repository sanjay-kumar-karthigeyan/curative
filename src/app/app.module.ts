import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from './footer/footer.component';
import { SocialmediaComponent } from './header/socialmedia/socialmedia.component';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderListenerDirective } from './header/header-listener.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageFooterModule } from './page-footer/page-footer.module'
import { NgxGalleryModule } from 'ngx-gallery';
import { ModelBoxModule } from './model-box/model-box.module'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ToastrModule } from 'ngx-toastr';
import { AppDirective } from './app.directive';
import * as $ from 'jquery';
// import { JwplayerComponent } from 'jwplayer/JwplayerComponent';
// import { JwplayerComponent } from '';


import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  LinkedinLoginProvider
} from "angular-6-social-login";

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("7924097870-4p5d6hmp4oqfrt27h21g99a1gs566arv.apps.googleusercontent.com")
        },
          {
            id: LinkedinLoginProvider.PROVIDER_ID,
            provider: new LinkedinLoginProvider("1098828800522-m2ig6bieilc3tpqvmlcpdvrpvn86q4ks.apps.googleusercontent.com")
          },
      ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SocialmediaComponent,
    HeaderListenerDirective,
    AppDirective
  ],
  imports: [
    BrowserModule,
    ModelBoxModule,
    AppRoutingModule,
    PageFooterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    NgxGalleryModule
    //ToastrModule.forRoot({ positionClass: 'inline' }),
  ],
  entryComponents:[],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
