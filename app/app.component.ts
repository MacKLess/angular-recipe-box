import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html',
})

export class AppComponent {
  recipes: Recipe[] = [
    new Recipe('Scrambled Eggs', 'eggs, mushrooms, cheese', 'put eggs and mushroom in a pan, cook, add cheese'),
    new Recipe('Toast', 'bread, butter, jam', 'toast bread, butter, and add jam'),
    new Recipe('Tea', 'teabag and hot water', 'boil water and add tea bag')
  ];
}

export class Recipe {
  constructor(public title: string, public ingredients: string, public directions: string) { }
}
