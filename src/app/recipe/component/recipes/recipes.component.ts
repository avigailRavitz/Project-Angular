import { Recipe } from '../../../entities/Recipe.model';
import { Component, OnInit } from '@angular/core';
import { RecipteService } from '../../recipte.service';
import { Router } from '@angular/router';
import { CategoryService } from '../../../../category.service';
import { Category } from '../../../entities/Category.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipeList: Recipe[] = [];
  categoryList: Category[] = [];
  filteredRecipes?: Recipe[] = this.recipeList;
  selectedCategories: number[] = [];
  categorySelection: { [key: number]: boolean } = {}; // מפתח: שם הקטגוריה, ערך: האם הקטגוריה נבחרה או לא
  preparationTime: number = 120;
  difficultyLevel: number = 5;
  filterByName:string=''

  constructor(private router: Router, private RecipeService: RecipteService,private CategoryService:CategoryService) { }

  ngOnInit(): void {

    this.CategoryService.getCategoryList().subscribe({
      next: (res) => {
        this.categoryList = res;
      },
      error: (err) => {
        console.log(err);
      }
    });

    this.RecipeService.getRecipeList().subscribe({
      next: (res) => {
        this.recipeList = res;
        this.filteredRecipes = [...this.recipeList];
      },
      error: (err) => {
        console.log(err);
      }
    });

    

  }
  filterAll(): void {
    this.filteredRecipes = this.recipeList.filter(recipe => {
        const time = this.preparationTime === 0 || (recipe.preparationTimeInMinutes !== undefined && recipe.preparationTimeInMinutes <= this.preparationTime);
        const difficulty = this.difficultyLevel === 0 || (recipe.difficultyLevel !== undefined && recipe.difficultyLevel <= this.difficultyLevel);
        const category = this.selectedCategories.length === 0 || (recipe.categoryCode !== undefined && this.selectedCategories.includes(recipe.categoryCode));
        const name = this.filterByName === '' || (recipe.name !== undefined && recipe.name.toLowerCase().includes(this.filterByName.toLowerCase()));
        return time && difficulty && category && name;
    });
}
 
  filterCategory(category: number|any): void {
    const index = this.selectedCategories.indexOf(category);
    if (index !== -1) {
      this.selectedCategories.splice(index, 1);
    } else {
      this.selectedCategories.push(category);
    }
    this.filterAll();
  }
  resetFilters() {
    this.filterByName=''
    this.preparationTime =  120;
    this.difficultyLevel = 5;
    this.selectedCategories = [];

    this.filteredRecipes = [...this.recipeList]; // או להשים רשימה ריקה במקרה שבו אתה רוצה להציג את כל המתכונים מחדש
  }
  onInputChange(event: Event): void {
    this.filterByName = (event.target as HTMLInputElement).value;
    this.filterAll();
  }
}
