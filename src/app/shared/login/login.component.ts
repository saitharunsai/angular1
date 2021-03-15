import { Component, Input, OnInit,Inject} from '@angular/core';
import { LoginSeviceService } from './login-sevice.service';
import { login } from './login';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  newform = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required,Validators.minLength(4)])
  });
  addDetails: any;
  
  constructor(private loginservice:LoginSeviceService,private router: Router) { }
  collection={};

  collect(){
    // this.loginservice(this.newform.value).subscribe((result)=>{
    // console.log(result)
    // this.newform.reset({})
    // })
  }

  ngOnInit() {
    
}
get f(){
  return this.newform.controls;
}
submit(){
  console.log(this.newform.value);
  alert("Thank you")
 this.router.navigate(['/customer']);
}


}
