import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weightmanagement',
  templateUrl: './weightmanagement.component.html',
  styleUrls: ['./weightmanagement.component.css']
})
export class WeightmanagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  list_data: any = {
    kettle_fitness: [
      "Improved coordination and agility", 
      "Better posture and alignment – Many exercises work the postural muscles in a functional way",
      "It's time efficient – You train multiple fitness components in the same session including cardio, strength, balance, stability, power, and endurance.",
      "The exercises are functional and weight bearing which helps increase bone density and keep the body strong for daily tasks.",
      "You become more efficient at other types of exercise.",
      "Increased power development and endurance, which is great for a variety of sports.",
      "It can help protect athletes from injuries "
      
    ],
    suspension_fitness: [
      "Suspension training is for everyone, no matter your fitness level.", 
      "Exercise never gets boring. ",
      "New twists on old exercises.",
      "Burn more calories.",
      "Get a stronger core.",
      "Lower risk of injury compared with free weight training.",
      "Gain more muscle.",
      "Workout anywhere.",
      "Do more in less time.",
      "Plank like never before."
    ],
    geriatric_2: [
      "osteoporosis",
      "osteoarthritis",
      "elderly falls",
      "urinary incontinence",
      "carpal tunnel syndrome",
      "postmenopausal women",
      "Back pain",
      "Cervical spondylosis",
      "Frozen shoulder"
    ]
  }
}
