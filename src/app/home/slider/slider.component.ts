import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input('type') type:string;
  @Input('data') data:string;
  constructor() { }

  tweet_data:any='';
  path:any='';
  items:any='';

  // array_generator = function(value){
  //   let array=[];

  //   if(this.type != "tweet")
  //     return false

  //   value.forEach((x,count,arr)=>{
  //     array.push(x)
  //   })

  // }

  
  ngOnInit() {
    console.log('bannerdata',this.type)
    this.items = this.data;
    if(this.items != null || this.items != undefined)
      this.tweet_data = JSON.parse(this.items)

 
    console.log('tweet_data',this.items)
  }

}
