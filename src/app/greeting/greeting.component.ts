import { Component, OnInit } from '@angular/core';
import {GreetingService} from '..//greeting.service'
@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {
  data
  constructor(private greet:GreetingService) { }

  ngOnInit() {
  }

  greetMe()
  {
  this.greet.greeting().subscribe(res=>{

    console.log(res)
    this.data=res
  })
  }

}
