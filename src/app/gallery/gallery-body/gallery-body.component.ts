import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-body',
  templateUrl: './gallery-body.component.html',
  styleUrls: ['./gallery-body.component.css']
})
export class GalleryBodyComponent implements OnInit {

  videoContainer: boolean = false;
  constructor() {
    // this.pagenation()
  }

  switch_expression: any = 'imageContainer';

  // galleryImages = [

  //     {
  //         small: '../../assets/carousel/image1.jpg',
  //         medium: '../../assets/carousel/image1.jpg',
  //         big: '../../assets/carousel/image1.jpg'
  //     },
  //     {
  //         small: '../../assets/carousel/image2.jpg',
  //         medium: '../../assets/carousel/image2.jpg',
  //         big: '../../assets/carousel/image2.jpg'
  //     },
  //     {
  //         small: '../../assets/carousel/image8.jpg',
  //         medium: '../../assets/carousel/image8.jpg',
  //         big: '../../assets/carousel/image8.jpg'
  //     },
  //     {
  //         small: '../../assets/carousel/image9.jpg',
  //         medium: '../../assets/carousel/image9.jpg',
  //         big: '../../assets/carousel/image9.jpg'
  //     },
  //     {
  //         small: '../../assets/carousel/image5.jpg',
  //         medium: '../../assets/carousel/image5.jpg',
  //         big: '../../assets/carousel/image5.jpg'
  //     },
  //     {
  //         small: '../../assets/carousel/image6.jpg',
  //         medium: '../../assets/carousel/image6.jpg',
  //         big: '../../assets/carousel/image6.jpg'
  //     },
  //     {
  //         small: '../../assets/carousel/image7.jpg',
  //         medium: '../../assets/carousel/image7.jpg',
  //         big: '../../assets/carousel/image7.jpg'
  //     },
  //     {
  //         small: '../../assets/carousel/image8.jpg',
  //         medium: '../../assets/carousel/image8.jpg',
  //         big: '../../assets/carousel/image8.jpg'
  //     },
  //     {
  //         small: '../../assets/carousel/image9.jpg',
  //         medium: '../../assets/carousel/image9.jpg',
  //         big: '../../assets/carousel/image9.jpg'
  //     },
  //     {
  //         small: '../../assets/carousel/image8.jpg',
  //         medium: '../../assets/carousel/image8.jpg',
  //         big: '../../assets/carousel/image8.jpg'
  //     },
  //     {
  //         small: '../../assets/carousel/image9.jpg',
  //         medium: '../../assets/carousel/image9.jpg',
  //         big: '../../assets/carousel/image9.jpg'
  //     }
  // ];


  // gallery_obj: any = {
  //     'data': [
  //         {
  //             'img': '../../assets/carousel/image1.jpg'
  //         },
  //         {
  //             'img': '../../assets/carousel/image2.jpg'
  //         },
  //         {
  //             'img': '../../assets/carousel/image3.jpg'
  //         },
  //         {
  //             'img': '../../assets/carousel/image4.jpg'
  //         },
  //         {
  //             'img': '../../assets/carousel/image5.jpg'
  //         },
  //         {
  //             'img': '../../assets/carousel/image6.jpg'
  //         },
  //         {
  //             'img': '../../assets/carousel/image7.jpg'
  //         },
  //         {
  //             'img': '../../assets/carousel/image8.jpg'
  //         }, 
  //         {
  //             'img': '../../assets/carousel/image9.jpg'
  //         },
  //         {
  //             'img': '../../assets/carousel/image8.jpg'
  //         }, 
  //         {
  //             'img': '../../assets/carousel/image9.jpg'
  //         }
  //     ]
  // }
  count: any = '';
  pagenation = function () {
    this.count = Math.round(this.gallery_obj.data.length / 3)
  }
  counter = function (x: number) {
    let array: any = [];
    for (let i = 0; i <= x; i++) {
      array.push(i);
    }
    return array
  }

  ngOnInit() {
  }

}
