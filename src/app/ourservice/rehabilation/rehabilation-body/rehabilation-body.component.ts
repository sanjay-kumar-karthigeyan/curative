import { Component, OnInit, OnChanges, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart, ChildActivationStart, ChildActivationEnd, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { ToastrService, ToastContainerDirective } from 'ngx-toastr';

@Component({
  selector: 'app-rehabilation-body',
  templateUrl: './rehabilation-body.component.html',
  styleUrls: ['./rehabilation-body.component.css']
})
export class RehabilationBodyComponent implements OnInit, OnChanges, AfterViewInit {
  page_position: any = '';
  // @ViewChild(ToastContainerDirective,{static:true}) toastContainer: ToastContainerDirective;
  // @ViewChild('toast',{static:true}) toast;



  constructor(
    // private route: ActivatedRoute, private afterRoute: Router, private ef: ElementRef, private viewportscroll: ViewportScroller, private toaster: ToastrService
    ) {
    // this.route.queryParams
    //   .subscribe(params => {
    //     // let data = this.scrollPosition(params.order)
    //     // this.viewportscroll.scrollToPosition([0,0])
    //     // this.ef.nativeElement.scrollPosition(500)
    //     // this.set(data)
    //   });

    // afterRoute.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //      console.log(event)
    //       this.page_position = this.scrollPosition(event.snapshot.queryParams.order)
    //   }
    // })
  }
  ngAfterViewInit(){
    // this.viewportscroll.scrollToPosition([0,190])
  }
  // set(data){
  //   this.page_position = data;
  // }

  // get(){
  //   console.log(this.page_position)
  //   return this.page_position;
  // }

  ngOnChanges(changes) {
    console.log(changes)
  }

  scrollPosition(data) {
    let val: any = '';
    switch (data) {
      case 'postoperative':
        val = 0;
        break;
      case 'sportsinjury':
        val = 100;
        break;
      case 'geriatic':
        val = 200;
        break;
      case 'womenshealth':
        val = 300;
        break;
    }
    return val
  }

  ngOnInit() {
    // this.toaster.overlayContainer = this.toastContainer;
  }
  openToast(){
    // this.toaster.success('Hello world!', 'Toastr fun!');
    // console.log(this.toast.nativeElement.toast('show'))
  }
  Posture_image:any = 'https://curative.s3.ap-south-1.amazonaws.com/studio_images/rehabilation.PNG';
    
  list_data: any = {
    list_benefits: [
      "Minimizing scar tissues", "Re-establish joint motion and function", "Fast recovery", "Regain muscle strength", "Improves flexibility", "Self case training", "Reduce risk for post operative complications"
    ],
    list_special: [
      "Post operative fracture around shoulder and elbow", "Post operative fractures around hip and knee", "Post operative fractures around back and hip", "Post operative fractures around ankles and wrist", "Post immobilization stiffness", "Rotator cuff tears", "ACL/PCL reconstruction surgery", "Post operative management after arthroscopy, TKR &THR", "Arthroplasty", "Post open reduction and internal fixations", "Post bankart operation", "Post osteotomy/osteoectomy", "After tendon transfer surgeries", "Reccurrent dislocations"
    ],
    list_WOMENS: [
      "Low back pain", "Pelvic floor dysfunction", "Antenatal exercise for pregnant mothers", "Urinary incontinence", "Post natal exercise after cesarean section", "Diastasic recti", "Gestational diabetes", "Pelvic organ proplapse", "Sacroilitis", "Uterine prolapse", "Osteoporosis", "Rehabilitation following breast surgey", "Lymphedema", "General wellness and exercise", "Menstrual pain", "Anxiety and depression"
    ]

  }

}
