import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myname = 'Gowtham';

  // form = new FormGroup({
  //   name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   body: new FormControl('', Validators.required)
  // });
  
  // get fname(){
  //   return this.form.controls;
  // }
  // get femail(){
  //   return this.form.controls;
  // }
  
  // submit(){
  //   console.log(this.form.value);
  // }
}
