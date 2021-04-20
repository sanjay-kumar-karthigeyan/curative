import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corporatewellness-body',
  templateUrl: './corporatewellness-body.component.html',
  styleUrls: ['./corporatewellness-body.component.css']
})
export class CorporatewellnessBodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  list_data: any = {
    corporatewellness_1: [
      "obesity", 
      "type 2 diabetes ", 
      "cardiovascular disease", 
      "stress", 
      "hypertension", 
      "dequervains tenosynovitis", 
      "back pain", 
      "carpal tunnel syndrome", 
      "tail bone pain(coccydynia)", 
      "neck pain", 
      "postural changes", 
      "stroke", 
      "some type of cancers", 
      "osteoporosis", 
      "depression and anxiety", 
      
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
