import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent  {

  @Input()
    all: number | undefined;

    isShow=false;

    toggleDisplay(){
      this.isShow=!this.isShow;
    }
  constructor() { }

  ngOnInit(): void {
  }

}
