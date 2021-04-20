import { Component, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { SharedServiceService } from '../angular-services/shared-service.service';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css'],
  animations: [
    trigger('visibilityChanged', [
      state('shown', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('shown => hidden', animate('200ms ease-in')),
      transition('hidden => shown', animate('700ms ease-out')),
    ])
  ]
})
export class TweetsComponent implements OnInit, AfterViewInit {
  @Output() messageToHome = new EventEmitter()
  tweet_data: any = '';
  path: any = '';
  visiblityState: string = '';;
  constructor(private sharedService: SharedServiceService) {
    // this.tweet_data = JSON.stringify(this.items[0].group);
    this.tweet_data = this.items[0].group;
    console.log('ssss', this.tweet_data);
    this.visiblityState = "hidden";
    // this.sharedService.shareData.asObservable();
  }

  state: number = 0;

  ngAfterViewInit() {

    this.visiblityState = "shown";
  }

  ngOnInit() {
  }
  sendMessage() {
    // this.messageToHome.emit('type1')
    this.sharedService.shareData.next('video')
  }
  // items:any=[0,1,2,3,4,5]

  items: any = [
    {
      'group': [
        {
          name: 'Sathish White',
          shortName: 'Sathish',
          tweet: 'Very professional and excellent service done ..definitely recommend to others who need physiotherapy, geriatric care , fitness and weight loss',
          src: ''

        }, {
          name: 'Vaseem Arshed',
          shortName: 'Vaseem',
          tweet: 'Excellent place with appropriate guidance and personal attendance for each individual, you are at a right place if want to begin a healthy and a fit lifestyle.',
          src: ''
        },
        {
          name: 'Premanand Jayaraman',
          shortName: 'Premanand',
          tweet: 'Good infra, knowledgeable people and great interactive sessions',
          src: ''
        },
        {
          name: 'Suresh',
          shortName: 'Suresh',
          tweet: 'Overall Good Experience One of the Best Fitness and Physio centre',
          src: ''
        }
      ],

    }, {
      'group': [
        {
          name: 'Vaishnavi Venkat ',
          shortName: 'Vainshnavi',
          tweet: 'This place has all the necessary facilities and i strongly recommend to get trained unser Sudhershan to know what fitness is all about and see the transformation...',
          src: ''
        }, {
          name: 'Vignesh Hariharan',
          shortName: 'Vignesh',
          tweet: 'Sudhershan is my friend and a much skilled trainer n rehab specialist. i can vouch for him. If you want a healthy n safe way to become fit, this is the best place...',
          src: ''
        },
        {
          name: 'Kokila',
          shortName: 'Kokila',
          tweet: 'Good and friendly service. Good to go this health studio',
          src: ''
        },
        {
          name: 'Dakshina Moorthy',
          shortName: 'Dakshina',
          tweet: 'Good training and friendly team.',
          src: ''
        }
      ]
    }

  ]

  changeTweet = (val) => {
    this.visiblityState = "hidden";
    this.state = val;
    setTimeout(() => {   
      this.tweet_data = this.items[val].group;
      this.visiblityState = "shown";
    }, 500);
  }
  changeVideoSrc = (src) => {
    this.path = src;
  }

}
