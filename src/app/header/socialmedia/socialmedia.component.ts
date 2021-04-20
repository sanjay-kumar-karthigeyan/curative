import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import {
//   AuthService,
//   FacebookLoginProvider,
//   GoogleLoginProvider,
//   LinkedinLoginProvider
// } from 'angular-6-social-login';

@Component({
  selector: 'app-socialmedia',
  templateUrl: './socialmedia.component.html',
  styleUrls: ['./socialmedia.component.css']
})
export class SocialmediaComponent implements OnInit {
  @Output() messageToHeader = new EventEmitter()

  constructor(  ) { }
  sendMessage() {
    this.messageToHeader.emit('profile')
  }

  ngOnInit() {

  }

  socialSignIn(socialPlatform: string) {
    // let socialPlatformProvider;
    // if (socialPlatform == "facebook") {
    //   socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    // } else if (socialPlatform == "google") {
    //   socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    // } else if (socialPlatform == "linkedin") {
    //   socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
    // }

    // this.socialAuthService.signIn(socialPlatformProvider).then(
    //   (userData) => {
    //     console.log(socialPlatform + " sign in data : ", userData);
    //   }
    // );
  }

}
