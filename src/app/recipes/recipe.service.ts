
import  {Injectable} from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredients } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping.list.service';
import { Recipe } from './recipe.model'

@Injectable()
export class RecipeService{
    recipeChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] =[

        new Recipe(
            'A new Recipy', 
            'This is very yummy and Healthy', 
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MndyKVZFY4R8RBRbQM6-zbL5myr_GyMmfQ&usqp=CAU',
            [
            new Ingredients('meat', 1),
            new Ingredients('bread ',20)]),
        new Recipe(
            'An other new Recipy', 
            'This is very Healthy', 
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MndyKVZFY4R8RBRbQM6-zbL5myr_GyMmfQ&usqp=CAU',
            [
                new Ingredients('bun', 1),
                new Ingredients('cheese ',20)  
            ])
     ]; 

    constructor(private slService:ShoppingListService){

    }
     
    getRecipes(){
     return this.recipes.slice(); 
     }

    getRecipe(index:number){
        return this.recipes[index];

    } 
    addIndredientToShoppingList(ingredients : Ingredients[]){
         this.slService.addIngredients(ingredients);

     }

    addRecipe(recipe:Recipe){
      this.recipes.push(recipe);
      this.recipeChanged.next(this.recipes.slice());

     }

    updateRecipe(index:number, newRecipe:  Recipe){
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number)
    {
        this.recipes.splice(index,1);
        this.recipeChanged.next(this.recipes.slice());

    }
}