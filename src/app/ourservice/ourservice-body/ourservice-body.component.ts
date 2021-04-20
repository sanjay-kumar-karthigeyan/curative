import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ourservice-body',
  templateUrl: './ourservice-body.component.html',
  styleUrls: ['./ourservice-body.component.css']
})
export class OurserviceBodyComponent implements OnInit {

  constructor( private route:ActivatedRoute ) {
    // this.route.url.subscribe(params => {
    //   console.log(params[0].path);
    // })
   }

  ngOnInit() {
  }

}
