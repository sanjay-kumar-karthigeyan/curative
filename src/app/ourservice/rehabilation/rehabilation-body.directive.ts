import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appRehabilationBody]'
})
export class RehabilationBodyDirective {

  constructor() { }

  @HostListener('window:scroll',['$event'])
    scroll(event){

    }

}
