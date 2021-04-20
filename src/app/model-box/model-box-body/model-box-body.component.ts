import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-model-box-body',
  templateUrl: './model-box-body.component.html',
  styleUrls: ['./model-box-body.component.css']
})
export class ModelBoxBodyComponent implements OnInit {
  @Input() dataFromParent:boolean;
  dataToChild:string = "type2";
  constructor() {
   }

  ngOnInit() {
  }

}
