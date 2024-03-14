import { Component, OnInit } from '@angular/core';
import { RecipeModule } from '../../recipe.module';
import { RecipteService } from '../../recipte.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../user/user.service';
import { Recipe } from '../../../entities/Recipe.model';
import { User } from '../../../entities/User.model';
import { error, log } from 'console';
import { Category } from '../../../entities/Category.model';
import { CategoryService } from '../../../../category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit{

recipeId?:Number| any
categoryId?:Number| any
userId?:Number| any
category?:Category
images?:string|any
recipe!:Recipe
user?:User
ingredients?: string[]|any
preparationSteps?: string[]|any
optionDelet?= false




  constructor(private _RecipeService:RecipteService,private rout:ActivatedRoute,private _categoryService:CategoryService,private _UserService:UserService) { }


  ngOnInit(): void {
    this.recipeId=this.rout.snapshot.paramMap.get('id');

    console.log("categoryyyyyyyyyyyyyy",this.category)
    this.initRecipe();
    this.initUser();
  }
  initRecipe(){
    this._RecipeService.getRecipeById(this.recipeId).subscribe({
      next:(res)=>{
        this.recipe=res;
        this.recipe = res;
        this.ingredients = this.recipe?.ingredients;
        this.preparationSteps = this.recipe?.preparationSteps;
        this.images = [this.recipe?.imageUrl, this.recipe?.imageUrl!];
        this.categoryId = this.recipe.categoryCode;
        this.userId = this.recipe.userCode;
console.log('imageeeeeeeeeeeeeee',this.images)
        console.log("recipe",this.recipe);
        console.log("category",this.categoryId)
       this.initCategory();
        // this.initUser();
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('finish recipe');
      }
  })
  }

  initCategory() {
    console.log("initCategory")
    this._categoryService.getCategoryById(this.categoryId).subscribe({
      next: (res) => {
        this.category = res;
        console.log("this.category",this.category)
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('finish category');
      }
    });
  }
  initUser(){
    console.log("init/user")

    this._UserService.getUserById(this.userId).subscribe({
      next:(res)=>{
        console.log("inittttttttttttttttttttttttttttttttttttttttttttttttttt")
         this.user=res;
        if(this.user.password==sessionStorage.getItem('password')&&this.user.name==sessionStorage.getItem('name'))
        this.optionDelet=true;
      
      },
      error:(err) =>{
        console.log(err);
      },
      complete:()=>{
        console.log('finish initUser')
      }
    })
    console.log("dlet",this.optionDelet)
  }
  del(){
    if(!this.optionDelet ){
    this._RecipeService.deleteRecipe(this.recipeId).subscribe({
error:(error)=>{
  console.log("")
  Swal.fire({
    title: 'המתכון לא נימחק',
    icon: 'error',
    confirmButtonText: 'אישור'
  })
},
complete:()=>{
  Swal.fire({
    title: 'המתכון נמחק בהצלחה!',
    icon: 'success',
    confirmButtonText: 'אישור'
  })
}
   
    })
  }
  else{
    Swal.fire({
      title: 'אין לך הרשאה למחקת המתכון!',
      icon: 'error',
      confirmButtonText: 'אישור'
    })
  }
    
  }

}


