import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GreetingService {

  constructor(private http:HttpClient) { }

  public greeting()
  {
   return this.http.get('http://rest-service.guides.spring.io/greeting')
  }
}
