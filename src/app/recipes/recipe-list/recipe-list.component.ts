import { Component, OnInit } from '@angular/core';
import { Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] =[

     new Recipe('A new Recipy', 'This is very yummy', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MndyKVZFY4R8RBRbQM6-zbL5myr_GyMmfQ&usqp=CAU'),
     new Recipe('A new Recipy', 'This is very yummy', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MndyKVZFY4R8RBRbQM6-zbL5myr_GyMmfQ&usqp=CAU')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
