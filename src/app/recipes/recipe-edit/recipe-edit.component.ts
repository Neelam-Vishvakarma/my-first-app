import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl, FormGroup,FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
// import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id : number;
  editMode = false;
  recipeform : FormGroup;
  

  constructor(private route: ActivatedRoute, 
    private recipeservice : RecipeService,
    private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
     
       (params: Params)=>{
         this.id = +params['id'];
         this.editMode = params['id'] != null;
         this.initForm();
        //  console.log(this.editMode);
       }
     
    );


}

onSubmit(){
  // const newRecipe =  new Recipe(
  //   this.recipeform.value['name'],
  //   this.recipeform.value['description'],
  //   this.recipeform.value['imagePath'],
  //   this.recipeform.value['ingredients'],
  // )
  if (this.editMode){
    this.recipeservice.updateRecipe(this.id, this.recipeform.value);
  }
  else{
    this.recipeservice.addRecipe(this.recipeform.value)
  }

  this.onCancel();

  

  // console.log(this.recipeform);
}

onAddIngredient(){
  (<FormArray>this.recipeform.get('ingredients')).push(
   new FormGroup({
     'name': new FormControl(null, Validators.required),
     'amount': new FormControl(null,[
      Validators.required,
      Validators.pattern('/^[1-9]+[0-9]+$/')
     ])
   }) 
  );
}

onDeleteIngredient(index:number){
 (<FormArray>this.recipeform.get('ingredients')).removeAt(index);
}

onCancel(){
  this.router.navigate(['../'],{relativeTo:this.route});
}
 
private initForm(){
  let recipeName = '';
  let recipeImagePath = '';
  let recipedescription = '';
  let recipeIngredients = new FormArray([]); 


  if (this.editMode){
    const recipe =  this.recipeservice.getRecipe(this.id);
    recipeName = recipe.name;
    recipeImagePath = recipe.imagePath;
    recipedescription =  recipe.description;
    if (recipe['ingredients']){
      for (let ingredient of recipe.ingredients){
        recipeIngredients.push(
          new FormGroup({
            'name': new FormControl(ingredient.name,Validators.required),
            'amount': new FormControl(ingredient.amount,[
              Validators.required,
              Validators.pattern('/^[1-9]+[0-9]+$/')])
          })
      )
        };
    }
  }
  this.recipeform = new FormGroup({
   'name' : new FormControl(recipeName, Validators.required),
   'imagePath' : new FormControl(recipeImagePath, Validators.required),
   'description' : new FormControl(recipedescription,Validators.required),
   'ingredients' : recipeIngredients
 });
}
}
