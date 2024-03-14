
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Category } from '../../../entities/Category.model';
import { CategoryService } from '../../../../category.service';
import { RecipteService } from '../../recipte.service';
import { Recipe } from '../../../entities/Recipe.model';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  recipeForm!: FormGroup ;
  categories: Category[] = []; // רשימת הקטגוריות
  showRotatingIcon=false;
   usercode?:number;
  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private categoryService:CategoryService ,// שימוש בשירות הקטגוריות
    private recipeService: RecipteService,){}
  
 
    ngOnInit(): void {
    console.log("addRecipe")
   // const isLoggedIn = sessionStorage.getItem('username') && sessionStorage.getItem('password');
    // if (!isLoggedIn) {
    //   {
    //     this.showRotatingIcon = true; // הצגת האייקון המסתובב

    //     setTimeout(() => {
    //       this.router.navigate(['/user/login']);

    //     }, 2000); // אם רוצים שהאנימציה תמשך שתי שניות
    //   }

   // }

    this.initForm();
    this.loadCategories(); // טעינת רשימת הקטגוריות בזמן האתחול

  }

  initForm(): void {
    this.recipeForm = this.formBuilder.group({
      recipeName: ['', Validators.required],
      recipeCode: ['', Validators.required],
      categoryCode: ['', Validators.required],
      preparationTime: ['', Validators.required],
      difficultyLevel: ['', Validators.required],
      ingredients: this.formBuilder.array([]),
      preparationSteps: this.formBuilder.array([]),
      userCode: ['0', Validators.required],
      imageRoute: ['../../../../assets/2.jpg', Validators.required]
    });
  }
  loadCategories(): void {
    this.categoryService.getCategoryList().subscribe(categories => {
      this.categories = categories;
    });
  }
  get ingredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
}
get preparationStepsArray(): FormArray {
  return this.recipeForm.get('preparationSteps') as FormArray;
}

addIngredients(): void {
    (this.recipeForm.get('ingredients') as FormArray).push(this.formBuilder.control(''));
  }

  removeIngredients(index: number): void {
    (this.recipeForm.get('ingredients') as FormArray).removeAt(index);
  }

  addStep(): void {
    (this.recipeForm.get('preparationSteps') as FormArray).push(this.formBuilder.control(''));
  }

  removeStep(index: number): void {
    (this.recipeForm.get('preparationSteps') as FormArray).removeAt(index);
  }

  addRecipe(): void {
    if (this.recipeForm.valid) {
      // הגדרת המתכון מהטופס
      const userCode: any = sessionStorage.getItem('password');
      const userCodeNumber = parseInt(userCode);
      console.log("usercode---------", userCodeNumber);

      const newRecipe: Recipe = {
        recipeCode: this.recipeForm.value.recipeCode,
        name: this.recipeForm.value.recipeName,
        categoryCode: this.recipeForm.value.categoryCode,
        preparationTimeInMinutes: this.recipeForm.value.preparationTime,
        difficultyLevel: this.recipeForm.value.difficultyLevel,
        dateAdded: new Date(),
        ingredients: this.recipeForm.value.ingredients.filter((ingredient: string) => ingredient.trim() !== ''), // מסננים את הריקים
        preparationSteps: this.recipeForm.value.preparationSteps.filter((step: string) => step.trim() !== ''), // מסננים את הריקים
        userCode: userCodeNumber,
        imageUrl: '../../../../1.jpg'
      };
       console.log("recipeCodeeeeeeeeee",newRecipe?.categoryCode);
      // ביצוע בקשת POST לשרת
      this.recipeService.setNewRecipe(newRecipe).subscribe(
        () => {
          Swal.fire({
            title: 'המתכון נוסף בהצלחה!',
            icon: 'success',
            confirmButtonText: 'אישור'
          }).then(() => {
            this.router.navigate(['/recipes']);
          });
        },
        (error) => {
          console.error('Error adding recipe:', error);
          Swal.fire({
            title: 'שגיאה בהוספת המתכון',
            text: 'נא לנסות שוב מאוחר יותר',
            icon: 'error',
            confirmButtonText: 'אישור'
          });
        }
      );
    } else {
      Swal.fire({
        title: 'יש למלא את כל השדות',
        text: 'נא למלא את כל השדות הנדרשים',
        icon: 'warning',
        confirmButtonText: 'אישו'
     }
  )};
  

}
  }