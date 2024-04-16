import { Component, Input } from '@angular/core';
import { Recipe } from '../../../entities/Recipe.model';
import { Router } from '@angular/router';
import { recipeRoutingModele } from '../../recipeRouting.module';
import { DurationPipe } from '../../../during.pipe';
@Component({
  selector: 'app-small-recipe',
  templateUrl: './small-recipe.component.html',
  styleUrl: './small-recipe.component.scss'
})
export class SmallRecipeComponent  {

@Input()
public recipe?:Recipe

   constructor(private rout:Router,private recipeRouter:recipeRoutingModele) {}

   ShowDetails():void{
    var userName=sessionStorage.getItem('name')
    if(userName!=null){
      this.rout.navigate(['/recipes',this.recipe?.recipeCode]);
    }
    else{
      this.rout.navigate(['/user/login']);
    }
    
   }
    
  // ngOnInit(){
  //   console.log('recipe',this.recipe)
  //   console.log('name ',this.recipe?.recipeCode)
  // }
}

