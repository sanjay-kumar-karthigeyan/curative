import { Component, OnInit } from '@angular/core';
import { RouterLinkWithHref, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor(private router: Router) { }
  public service_data:any='';
  ngOnInit() {
    this.service_data= [
      {
        "title":"Physiotherapy",
        "discription":"Physiotherapy is an allied health profession concerned with the assessment, diagnosis and treatment of disease and disability through physical means.",
        "list":["SHOULDER PAIN","ELBOW,WRIST & HAND PAIN","NECK PAIN","BACK PAIN","HIP PAIN","KNEE PAIN","ANKLE & FOOT PAIN"],
        "state":"/service/physiotherapy"
      },
      {
        "title":"REHABILITATION",
        "discription":"Physical therapy can actually help the recovery and healing process after a major surgery! This is known as postoperative, or  post-surgery recover or rehabilitation.",
        "list":["Minimizing scar tissues ","Re-establish joint motion and function","Fast recovery","Regain muscle strength","Improves flexibility","Self case training","Reduce risk for post operative complications"],
        "state":"/service/rehabilation"
      },
      {
        "title":"WOMENS HEALTH",
        "discription":"Physiotherapy plays a special role in the field of women's health and wellness across her life span.  The scope of practice has now increased to all health concern of women.",
        "list":["Low back pain","Pelvic floor dysfunction","Antenatal exercise for pregnant mothers","Urinary incontinence","Post natal exercise after cesarean section","Pelvic organ proplapse","Rehabilitation following breast surgey"],
        "state":"/service/rehabilation"
      },
      {
        "title":"POSTURAL CORRECTION",
        "discription":"Posture is the position in which you hold your body upright against gravity while standing, sitting or lying down.",
        "list":["Biomechanical  Analysis","Gait Analysis","Posture Correction","Scapular stabilisation exercises","Core exercise","Supportive taping","Soft tissue massage"],
        "state":"/service/rehabilation"
      },
      {
        "title":"CORPORATE WELLNESS",
        "discription":"A person living a sedentary lifestyle is often sitting or lying down while engaged in an activity like reading, watching television, or using a phone/computer etc for much of the day.",
        "list":["Shoulder Shrugs","Arm Circles","Wrist Cricles","Seated Chair Twist Pose","Backbend Arch","Feet and Legs","Hands and Arms","In Standing","Abs twist"],
        "state":"/service/corporatewellness"
      }
    ]
  }

  changeState(path){
    this.router.navigate([path])
  }

}
