import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Coffee } from '../coffee';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {
  coffees!: Observable<Coffee[]>;
  constructor(private coffeeService: CoffeeService) { }

  ngOnInit(): void {
    this.coffees = this.coffeeService.getCoffeeList();
  }

}
