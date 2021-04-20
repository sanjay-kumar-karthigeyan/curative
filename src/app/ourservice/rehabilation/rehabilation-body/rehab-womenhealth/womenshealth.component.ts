import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rehab-women',
  templateUrl: './womenshealth.component.html',
  styleUrls: ['./womenshealth.component.css']
})
export class WomensHealthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  list_data: any = {
    men_women: [
      "Men have more muscle mass than women.", "Women tend to have a higher proportion of body fat than men. This fat is generally stored in the breasts, hips, and buttocks", "Men tend to have more body hair (especially facial hair)"],
    women_treatment: [
      "Osteoarthritis",
      "Osteoporosis",
      "Breast and other cancers",
      "Rehabilitation following breast surgery",
      "Lymphedema",
      "Post - menopausal heart disease",
      "Chronic myofascial pain",
      "Patellofemoral pain syndrome",
      "Hypermobility syndrome",
      "Multiple sclerosis",
      "Sacroiliac(SI) joint dysfunction",
      "Fibromyalgia",
      "Ailments unique to female athletes"

    ]
  }
}
