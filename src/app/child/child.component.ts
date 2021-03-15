import { Component,Input, OnInit,Inject } from '@angular/core';



@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  isLoggedIn = false;
  parentMessage = "About Company"
  newMessage = "FAQ"
  fullName: string = "Hello JavaTpoint";  
   
  @Input() childMessage= "";
  constructor( ) { }

  ngOnInit(): void {
  }

}
