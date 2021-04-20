import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BmiCalculatorComponent implements OnInit {

  constructor( private FB:FormBuilder ) { 
    this.bmiform = this.FB.group({
        height:['',Validators.required],
        weight:['',Validators.required],
        age:['',Validators.required],
        sex:[''],
    })
  }

  ngOnInit() {
  }
  bmiform:any = FormGroup;
  submitted:boolean= false;
  bmi_data:any={
      bmi_value:0.0,
      result:'',
      status:'',
  }
  bmi_value_emotion:string="happy";
  get formInstance(){
      return this.bmiform.controls
  }
  submitForm = async function(form){
      this.submitted=true;
      try{    
          if(form.status.toLowerCase() != 'valid')
              return 

          await this.calculateBmi(form);
          new Promise((resolve,reject)=>{
              return resolve(this.bmi_data)
          })
          
      }catch(err){
          console.log(err)
      }
  }

  calculateBmi = async function(form){
      try{
          let height = form.value.height;
          let weight = form.value.weight;
          let new_height = height/100;
          let bmi = weight/(new_height * new_height) ;
          switch(true){
              case (bmi < 18.5):
                  this.bmi_data.bmi_value = bmi.toFixed(2);
                  this.bmi_data.result = 'you are too thin.'
                  this.bmi_data.status = 'lean'
              break;
              case (bmi > 18.5 && bmi < 25):
                  this.bmi_data.bmi_value = bmi.toFixed(2);
                  this.bmi_data.result = 'you are healthy.'
                  this.bmi_data.status = 'happy'
              break;
              case (bmi > 25):
                  this.bmi_data.bmi_value = bmi.toFixed(2);
                  this.bmi_data.result = 'you are obessed.'
                  this.bmi_data.status = 'unhappy'
              break
          }

          return new Promise((resolve,reject)=>{
            resolve(this.bmi_data)
          })
      } catch (error) {
          console.log(error)
      }
  }
}
