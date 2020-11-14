import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coffee } from './coffee';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor(private http: HttpClient) { }

  getCoffeeList() {
    return this.http.get<Coffee[]>('https://sampleapis.com/coffee/api/hot')
  }
}
