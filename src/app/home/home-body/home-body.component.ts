import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css']
})
export class HomeBodyComponent implements OnInit {
  @Output() messageEvent = new EventEmitter();
  constructor() { }
  messageToApp =(event)=>{
    console.log('messagereceivedfromicons',event)
    this.messageEvent.emit(event)
  }
  ngOnInit() {
  }

}
