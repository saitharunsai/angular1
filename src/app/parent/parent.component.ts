import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { LoginSeviceService } from '../shared/login/login-sevice.service';
import { ActivatedRoute } from '@angular/router'



@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  alert:boolean=false
  
  
  addDetails= new FormGroup({
    email: new FormControl('',[Validators.required, Validators.minLength(3)]),
    password: new FormControl(''),
    name: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zipcode: new FormControl(''),
    skill: new FormControl('')
  })
  get fname(){
    return this.addDetails.controls;
  }
  get femail(){
    return this.addDetails.controls;
  }

  constructor(private router: Router,private service :LoginSeviceService, private activeroute : ActivatedRoute) { }

  collect(){
    this.service.saveDetails(this.addDetails.value).subscribe((result)=>{
      this.alert=true
    this.addDetails.reset({})
    })
  }
  closealert(){
    this.alert=false
  }
  ngOnInit(): void {
    console.warn(this.activeroute.snapshot.params.id)
  //   this.service.getCurrentDetails(this.activeroute.snapshot.params.id).subscribe((result)=>{
    
  // })
  }
  company = 'Sign UP'

onbutton(){
  this.router.navigate(['/login']);
}




}
