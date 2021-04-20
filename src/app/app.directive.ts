import { Directive, HostListener, Output, EventEmitter, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appApp]'
})
export class AppDirective {
  // onValueChange: boolean = false;
  // @Input() onValueChange = new EventEmitter()
  
  constructor() { }

  // @Input('first') change:any;
  // // @HostBinding('onValueChange') stringValue:boolean

  // @HostListener('window:scroll', ['$event'])
  // onscroll(event) {

  //   if (event.target.scrollingElement.scrollTop > 80) {
  //     this.change = true;
  //     // this.onValueChange.emit('true')
  //     // this.stringValue = true;
  //     console.log('start')
  //   } else {
  //     // this.onValueChange.emit('false')
  //     // this.stringValue = false;
  //     console.log('astrt')
  //   }
  // }
}
