import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  no1:number=0
  no2:number=0
  result:number=0;
  add(no1,no2)
  {
    this.no1=+no1
    this.no2=+no2
    this.result=this.no1+this.no2
    console.log(this.result)
  }
}
