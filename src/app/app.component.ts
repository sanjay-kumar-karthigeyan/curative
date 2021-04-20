import { Component, ComponentFactoryResolver, ViewChild, ApplicationRef, EmbeddedViewRef, Injector, ElementRef, Renderer2, OnInit, TemplateRef } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { SharedServiceService } from './home/angular-services/shared-service.service'
// import { ɵrenderComponent as renderComponent, Injector } from '@angular/core';
// import { FooterComponent } from './footer/footer.component'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isfooter: boolean = true;

  @ViewChild('hostcontainer', { static: false }) hostContainer: ElementRef;
  dataToModel: string = ''
  @ViewChild("content", { static: false }) modalContent: TemplateRef<any>;
  // @ElementRef('content',{static: false}) Content:ElementRef

  loadFeature() {
    import('./footer/footer.component').then(({ FooterComponent }) => {
      let dyn_elem = this.componentFac.resolveComponentFactory(FooterComponent).create(this.injector);
      this.appRef.attachView(dyn_elem.hostView);
      let entry_comp = (dyn_elem.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement
      this.hostContainer.nativeElement.appendChild(entry_comp)
    })
  }

  receiveMessage = (event) => {
    console.log('messagereceivedfromheader', event)
    this.dataToModel = event
  }


  constructor(private route: Router, private componentFac: ComponentFactoryResolver, private injector: Injector,
    private appRef: ApplicationRef, private renderer: Renderer2, private sharedService: SharedServiceService, private modalService: NgbModal) {
    this.appRef.tick()
    route.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isfooter = event.url.substr((event.url.indexOf('/') + 1), event.url.length) == 'contact' ? false : true;
        console.log('start')
        window.scrollTo(0, 0)

        if (event.url.substr((event.url.indexOf('/') + 1)) == "home") {
          // this.dataToModel = "profile";
           this.modalService.open(this.modalContent);
        }

      }

    })
    this.sharedService.shareData.subscribe((data) => {
      this.dataToModel = data
      console.log('data received', data)
    })
  }

  ngOnInit() {

  }

}
