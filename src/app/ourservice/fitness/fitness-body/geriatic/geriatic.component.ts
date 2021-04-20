import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geriatic',
  templateUrl: './geriatic.component.html',
  styleUrls: ['./geriatic.component.css']
})
export class GeriaticComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  list_data: any = {
    geriatric: [
      "To attain a high level of cardiorespiratory fitness", 
      "To improve balance to prevent frequent falls",
      "Improve fine-tuned motor skills benefit cognitive function",
      "Improves mental well being"
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
