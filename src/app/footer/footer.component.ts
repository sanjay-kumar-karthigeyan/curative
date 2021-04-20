import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  
    enquiryFrom:FormGroup;
    submitted:boolean = false;
    footer:boolean = true;
    constructor(private fb:FormBuilder, public http:HttpClient, private router:Router){
        this.enquiryFrom = this.fb.group({
            name:['',Validators.required],
            age:['',Validators.required],
            sex:['',Validators.required],
            email:['',[Validators.required,Validators.email]],
            option:[''],
            textarea:['']
        })
        this.router.events.subscribe(event=>{
            if(event instanceof NavigationEnd){
                this.footer = event.url.substr((event.url.indexOf('/')+1),event.url.length) == 'contact'?false:true;
            }
        })
    }
    
    get formInstance(){
        return this.enquiryFrom.controls;
    }
    submitForm = async function(form){
        this.submitted = true;
        if(form.status.toLowerCase() != 'valid')
            return

        try {
            this.http.post('http://localhost:3000/sendmail',{'formdata':form.value}).subscribe((data)=>{
                console.log('data sent')
            })
            console.log('form',form)
        } catch (error) {
            console.log(error)
        }
    }
    ngOnInit() {
    }

}
