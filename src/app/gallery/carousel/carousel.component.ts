import { Component, OnInit, Input } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
    // @Input('app-data') gallery_data;

    galleryOptions_studio: NgxGalleryOptions[];
    galleryOptions_rehab: NgxGalleryOptions[];

    galleryOptions_events: NgxGalleryOptions[];
    galleryImages_events: NgxGalleryImage[];

    galleryImages_studio: NgxGalleryImage[];
    galleryImages_rehab: NgxGalleryImage[];

    constructor(public http: HttpClient) { }
    public conditional_array: any = ['studio', 'events', 'rehab']
    // @Input('type') type: string

    ngOnInit() {
        this.http.get('../../assets/json/images.json').subscribe((data) => {
            this.conditional_array.forEach((x, count, arr) => {
                switch (x) {
                    case 'studio':
                        this.galleryOptions_studio = data['images'][0][x][0]['galleryoption'];
                        this.galleryImages_studio = data['images'][0][x][1]['gallerimages'];
                        break;
                    case 'events':
                        this.galleryOptions_events = data['images'][1][x][0]['galleryoption'];
                        this.galleryImages_events = data['images'][1][x][1]['gallerimages'];
                        break;
                    // case 'rehab':
                    //     this.galleryOptions_rehab = data['images'][2][x][0]['galleryoption'];
                    //     this.galleryImages_rehab = data['images'][2][x][1]['gallerimages'];
                    //     break;
                }
            })
        })

        // this.galleryOptions = [
        //     {
        //         "image": false,
        //         "height": "100px",
        //         "imageDescription": true,
        //         "thumbnailsColumns": 7
        //      }
        // ];
        // this.galleryImages = [

        //     {
        //         "small": "https://curative.s3.ap-south-1.amazonaws.com/studio_images/_DSC0635.JPG",
        //         "medium": "https://curative.s3.ap-south-1.amazonaws.com/studio_images/_DSC0635.JPG",
        //         "big": "https://curative.s3.ap-south-1.amazonaws.com/studio_images/_DSC0635.JPG",
        //         "label": "hello world",
        //         "description": "helo world"
        //     }
        // ];
        // console.log('data',this.galleryOptions)


    }

}
