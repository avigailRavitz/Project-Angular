import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Recipe } from '../../../entities/Recipe.model';
import { Category } from '../../../entities/Category.model';
import { RecipteService } from '../../recipte.service';
import { CategoryService } from '../../../../category.service';


@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent  implements OnInit {
  recipeForm!: FormGroup;
  recipe!: Recipe;
  categories: Category[] = []; // רשימת הקטגוריות
  recipeId!:number
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipteService,
    private formBuilder: FormBuilder,
    private categoryService:CategoryService,
    private rout:Router
  ) { }

  async ngOnInit(): Promise<void> {
    this.route.queryParams.subscribe(params=>{this.recipeId=params['recipeCode']});
    console.log(this.recipeId)
    await this.getRecipe(this.recipeId);
    this.recipeForm = this.formBuilder.group({
      recipeName: ['', Validators.required],
      categoryCode: ['', Validators.required],
      preparationTimeInMinutes: ['', Validators.required],
      difficultyLevel: ['', Validators.required],
      ingredients: ['', Validators.required],
      preparationSteps: ['', Validators.required]
    });

    this.loadCategories(); // טעינת רשימת הקטגוריות בזמן האתחול

  }

   async getRecipe(id: string | any): Promise<void> {
    this.recipeService.getRecipeById(id)
      .subscribe(recipe => {
        this.recipe = recipe;
        this.populateForm();
      });
  }
  loadCategories(): void {
    this.categoryService.getCategoryList().subscribe(categories => {
      this.categories = categories;
    });
  }

  populateForm(): void {
    this.recipeForm.setValue({
      recipeName: this.recipe.name,
      categoryCode: this.recipe.categoryCode,
      preparationTimeInMinutes: this.recipe.preparationTimeInMinutes,
      difficultyLevel: this.recipe.difficultyLevel,
      ingredients: this.recipe.ingredients?.join(', '), // assuming ingredients is an array
      preparationSteps: this.recipe.preparationSteps?.join('\n') // assuming preparationSteps is an array
    });
  }

  saveChanges(): void {
    if (this.recipeForm.valid) {
      this.recipe = {
        ...this.recipe,
        name: this.recipeForm.value.recipeName,
        categoryCode: this.recipeForm.value.categoryCode,
        preparationTimeInMinutes: this.recipeForm.value.preparationTimeInMinutes,
        difficultyLevel: this.recipeForm.value.difficultyLevel,
        ingredients: this.recipeForm.value.ingredients.split(','),
        preparationSteps: this.recipeForm.value.preparationSteps.split('\n')
      };

      this.recipeService.updateRecipe(this.recipe)
        .subscribe(() => {
          Swal.fire({
            title: 'המתכון עודכן בהצלחה!',
            icon: 'success',
            confirmButtonText: 'אישור'
          }).then(() => {
            this.rout.navigate(['/recipes'])
          });
       
        });
    } else {
      Swal.fire({
        title: 'שגיאה בעידכון המתכון',
        icon:'error',
        confirmButtonText: 'אישור'
      }).then(() => {
        this.rout.navigate(['/recipes'])
      });
    }
  }
}
