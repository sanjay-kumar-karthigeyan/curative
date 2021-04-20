import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHeaderListener]'
})
export class HeaderListenerDirective {

  constructor( private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseover') onMouseOver() {
    event.preventDefault()
    event.stopPropagation()

    let elem = this.el.nativeElement.querySelector('.dropdown-menu');
    this.renderer.setStyle(elem,'display','block')
    

    // console.log('enter',this.el.nativeElement.querySelector('.dropdown-menu'))
  }
  @HostListener('mouseleave') onMouseLeave($event) {
    let elem = this.el.nativeElement.querySelector('.dropdown-menu');
    this.renderer.setStyle(elem,'display','none')
  }

}
