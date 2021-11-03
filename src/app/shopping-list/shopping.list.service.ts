import { Subject } from 'rxjs';
import { Ingredients } from '../shared/ingredient.model'

export class ShoppingListService{
    ingredientsChanged = new Subject<Ingredients[]>();
    startedEditing=new Subject<number>();
    private ingredients: Ingredients[] = [
        new Ingredients('Tomatos', 5),
        new Ingredients('Potatos', 10),
    
      ];

     getIngredients(){
      return this.ingredients.slice() ;  
     }

    getIngredient(index: number){
        return this.ingredients[index];
     }
     
    addIngredient(ingredient:Ingredients){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
     }
    addIngredients(ingedients : Ingredients[]){
        // for (let ingredient of ingredients){
        //     this.addIngredient(ingedient)
        // }
        // next is used with Subject 
        this.ingredients.push(...ingedients);
        this.ingredientsChanged.next(this.ingredients.slice());

    }

    updateIngredient(index:number, newIngredient: Ingredients){
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index:number){
     this.ingredients.splice(index,1);
     this.ingredientsChanged.next(this.ingredients.slice());
    }

}