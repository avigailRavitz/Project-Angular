import { Recipe } from '../../../entities/Recipe.model';
import { Component, OnInit } from '@angular/core';
import { RecipteService } from '../../recipte.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  RecipeList?: Recipe[];
  filteredRecipes: Recipe[] = [];
  filterByName: string = '';

  constructor(private router: Router, private _RecipeService: RecipteService) { }

  ngOnInit(): void {
    this._RecipeService.getRecipeList().subscribe({
      next: (res) => {
        this.RecipeList = res;
        this.filterRecipes(); // Filter initially
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        console.log('finish');
      }
    })
  }

  filterRecipes(): void {
    if (!this.RecipeList) return;
    this.filteredRecipes = this.RecipeList.filter(recipe =>
      recipe.name?.toLowerCase().startsWith(this.filterByName.toLowerCase())
    );
  }

  onInputChange(event: Event): void {
    this.filterByName = (event.target as HTMLInputElement).value;
    this.filterRecipes();
  }
}