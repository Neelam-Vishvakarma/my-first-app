import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('Tomatos', 5),
    new Ingredients('Potatos', 10),

  ];

  constructor() { }

  ngOnInit(): void {
  }
  onIngradientAdded(ingredient:Ingredients){
    this.ingredients.push(ingredient);

  }


}
