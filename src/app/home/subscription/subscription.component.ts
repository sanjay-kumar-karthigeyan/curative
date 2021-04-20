import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }
  bottomNav = function(){
    window.scrollTo(0,document.body.scrollHeight)
    this.route.navigate(['/contact'])
  }
}
