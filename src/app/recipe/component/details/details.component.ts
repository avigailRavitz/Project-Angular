import { Component, OnInit } from '@angular/core';
import { RecipeModule } from '../../recipe.module';
import { RecipteService } from '../../recipte.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
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
recipe?:Recipe | any
user?:User |any
ingredients?: string[]|any
preparationSteps?: string[]|any
optionDelet?= false




  constructor(private _RecipeService:RecipteService,private rout:ActivatedRoute,private _categoryService:CategoryService,private _UserService:UserService,private router:Router) { }


  ngOnInit(): void {
    this.recipeId=this.rout.snapshot.paramMap.get('id');
    console.log("recipId",this.recipeId)
    this.initRecipe();
    // this.initUser();
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
       this.initCategory();
        this.initUser();
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
    this._categoryService.getCategoryById(this.categoryId).subscribe({
      next: (res) => {
        this.category = res;
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
    this._UserService.getUserById(this.userId).subscribe({
      next:(res)=>{
        console.log("details",res)
         this.user=res;
        if(this.user.password==sessionStorage.getItem('password')&&this.user.name==sessionStorage.getItem('name'))
        this.optionDelet=true;
      console.log("sucsses",this.optionDelet)
      },
      error:(err) =>{
        console.log(err);
      },
      complete:()=>{
        console.log('finish initUser')
      }
    })
  }
  del(){
    console.log("this.optionDelettttttttttttt",this.optionDelet)
    if(this.optionDelet ){
     
    this._RecipeService.deleteRecipe(this.recipeId).subscribe({
       
error:(error)=>{
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
  moveEdit( ){
console.log("edit",this.optionDelet)
if(this.optionDelet){
  this.router.navigate(["recipes/editRecipe"],  {queryParams: { recipeCode: this.recipe.recipeCode }})
    }
}





}


