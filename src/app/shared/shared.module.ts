import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { login, posts } from '../shared/login/login';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [ LoginComponent],
    exports: [ LoginComponent ],
    imports: [
      CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
      ]
})
export class SharedModule { }