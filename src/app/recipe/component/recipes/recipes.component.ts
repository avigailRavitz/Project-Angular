import { Recipe } from '../../../entities/Recipe.model';
import { Component, OnInit } from '@angular/core';

import { RecipteService } from '../../recipte.service';
import { recipeRoutingModele } from '../../recipeRouting.module';
import { RecipeModule } from '../../recipe.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  RecipeList?:Recipe[] ;

  constructor(private router: Router, private _RecipeService: RecipteService) { }

  ngOnInit(): void {
    this._RecipeService.getRecipeList().subscribe({
      next: (res) => {
        this.RecipeList = res
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        console.log('finish');
      }
    })
  }

}
