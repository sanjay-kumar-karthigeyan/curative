import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  constructor(private ef: ElementRef) { }

  ngOnInit() {
  }
  hover = function (state, indx) {
    if (state) {
      this.ef.nativeElement.querySelector('#discription_' + indx).classList.add('animate_discription');
    } else {
      this.ef.nativeElement.querySelector('#discription_' + indx).classList.remove('animate_discription');
    }
    console.log(state)
  }

  profile: any = [
    {
      name: 'T.Vinitha',
      specialist: 'BPT',
      data: 'Well qualified and experience in the field of physiotherapy. Interested in the field of orthopedics and neurorehabilation. Certified in Neuromyoskeletal dry needling, clinical and sports tapping',
      image: 'https://curative.s3.ap-south-1.amazonaws.com/studio_images/IMG_20191231_173005.jpg'
    }, {
      name: 'B.P.Sudhershan',
      specialist: 'Founder / Head Coach',
      data: 'IFA(International Fitness association) certified group fitness instructor & personal trainer (step-kickboxing-weight training) and ACE (American council on exercise) I certified personal trainer has a 10 years of experience in fitness industry',
      image: 'https://curative.s3.ap-south-1.amazonaws.com/studio_images/IMG_9982.jpeg'
    }, {
      name: 'S.Vigneshwaran',
      specialist: 'BPT',
      data: 'Well qualified and experience in the field of physiotherapy. My strength is in the field of Orthopedics, Neurorehabilation and Fitness. Certified in lumbar spne expert accredited by CPD UK',
      image: 'https://curative.s3.ap-south-1.amazonaws.com/studio_images/IMG-20191231-WA0012.jpg'
    }
  ]
}
