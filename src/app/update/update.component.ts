import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { LoginSeviceService } from '../shared/login/login-sevice.service';
import { ActivatedRoute,Router} from '@angular/router'


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})



export class UpdateComponent implements OnInit {
  alert:boolean=false

  editDetails= new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    name: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zipcode: new FormControl(''),
    skill: new FormControl('')
  })
  constructor(private service : LoginSeviceService, private router : ActivatedRoute) { }

  ngOnInit(): void {
  console.warn(this.router.snapshot.params.id)
  this.service.getCurrentDetails(this.router.snapshot.params.id).subscribe((result:any)=>{
   console.warn(result)
   this.editDetails = new FormGroup({
    email: new FormControl(result.email),
    password: new FormControl(result.password),
    name: new FormControl(result.name),
    address: new FormControl(result.address),
    city: new FormControl(result.city),
    state: new FormControl(result.state),
    zipcode: new FormControl(result.zipcode),
    skill: new FormControl(result.skill)
   })
  })
  }
 update(){
   console.warn("item",this.editDetails.value)
   this.service.updateDetails(this.router.snapshot.params.id,this.editDetails.value).subscribe((result)=>{
     console.warn("result",result)
     this.alert=true
     this.editDetails.reset({})
   })
 }
 closealert(){
  this.alert=false
 }
}
