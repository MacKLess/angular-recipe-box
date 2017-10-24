import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html',
})

export class AppComponent {
  recipes: Recipe[] = [
    new Recipe('Scrambled Eggs', ['eggs', 'mushrooms', 'cheese'], 'Put eggs and mushroom in a pan, cook, add cheese'),
    new Recipe('Toast', ['bread', 'butter', 'jam'], 'Toast bread, butter, and add jam'),
    new Recipe('Tea', ['teabag', 'hot water'], 'Boil water and add tea bag') ];
  selectedRecipe = null;
  editRecipe = null;

  viewRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

  finishedReviewing() {
    this.selectedRecipe = null;
    this.editRecipe = null;
  }

  editThisRecipe(clickedRecipe){
    this.editRecipe = clickedRecipe;
  }
}

export class Recipe {
  constructor(public title: string, public ingredients: string[], public directions: string) { }
}
