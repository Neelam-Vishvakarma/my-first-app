import { Component, OnInit,ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // @ViewChild('hello', { static: false }) divHello: ElementRef;
  @ViewChild('nameInput',{ static: false }) nameInputRef:ElementRef;
  @ViewChild('amountInput',{ static: false }) amountInputRef:ElementRef;
  @Output()ingredientAdded =  new EventEmitter<Ingredients>();
  constructor() { }

  ngOnInit(): void {
  }
  OnAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredients(ingName,ingAmount);
    this.ingredientAdded.emit(newIngredient);
  };

}
