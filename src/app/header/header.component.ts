import { Component, OnInit, HostListener, ElementRef, ViewChild, Directive, Input, Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  constructor() { }

  @Output() messageEvent = new EventEmitter();
  // @Input() onValueChange:any;

  isShrink:boolean = false;
  ngOnInit() {
  }
  navCollapsed:boolean = true;
  isNavbarCollapsed:boolean = true;
  collHeight:boolean=false;
  scollHeight:boolean=false;
  @HostListener('window:scroll',['$event']) 
  onscroll(event){
      
      if(event.target.scrollingElement.scrollTop > 80){
          this.scollHeight = true;
          this.isShrink = true;
      }else{
          this.scollHeight = false;
          this.isShrink = false;
      }
  }

  messageToApp =(event)=>{
    console.log('messagereceivedfromicons',event)
    this.messageEvent.emit(event)
  }
  // @ViewChild('navDropDown',{static: true}) navDropDown:ElementRef;

  // @HostListener('click',this.navDr)

  
  // @ViewChild('header') headerTag:ElementRef;
  ngAfterViewInit(){
  }
  

}

