import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generalfitness',
  templateUrl: './generalfitness.component.html',
  styleUrls: ['./generalfitness.component.css']
})
export class GeneralfitnessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  list_data: any = {
    general_fitness: [
      "Cable machines", 
      "Barbells",
      "Dumbbells",
      "Kettlebells",
      "Bodyweight training",
      "Physioballs (also called Swiss balls or exercise balls)",
      "Resistance tubes",
      "Rocker and wobble boards",
      "Balance disks",
      "ankle weights",
      "Suspension system"
      
    ],
    geriatric_1: [
      "Improves flexibility", 
      "Improves strength ",
      "Improve bone density",
      "Improve sleep",
      "Increase lifespan",
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
