import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected =  new EventEmitter<Recipe>();
  recipes: Recipe[] =[

     new Recipe('A new Recipy', 'This is very yummy and Healthy', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MndyKVZFY4R8RBRbQM6-zbL5myr_GyMmfQ&usqp=CAU'),
     new Recipe('A new Recipy', 'This is very Healthy', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MndyKVZFY4R8RBRbQM6-zbL5myr_GyMmfQ&usqp=CAU')
  ];

  constructor() { }

  ngOnInit(): void {
  }
  OnRecipeSelected(recipe : Recipe){
   this.recipeWasSelected.emit(recipe);
  }

}
