import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeBodyComponent } from './home-body/home-body.component';
import { TweetsComponent } from './tweets/tweets.component';
import { ServiceComponent } from './service/service.component';
import { TrainerComponent } from './trainer/trainer.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { SliderComponent } from './slider/slider.component';
import { ModelBoxModule } from '../model-box/model-box.module';
import { SubscriptionComponent } from './subscription/subscription.component'


@NgModule({
  declarations: [HomeBodyComponent, TweetsComponent, ServiceComponent, TrainerComponent, BmiCalculatorComponent, SliderComponent, SubscriptionComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModelBoxModule
  ]
})
export class HomeModule { }
