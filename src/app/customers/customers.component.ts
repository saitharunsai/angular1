import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  search='';
  customers: any[];
  constructor() {
    this.customers =[
      {name:'snehal',gender:'female',city:'kolhapur'},
      {name:'krishna',gender:'male',city:'mumbai'},
      {name:'supriya',gender:'female',city:'pune'}
    ];
  }

  ngOnInit(): void {
  }
  getTotalCount(): number {
    return this.customers.length;
}

}
