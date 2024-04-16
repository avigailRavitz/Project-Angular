import { Route, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { RecipesComponent } from "./component/recipes/recipes.component";
import { AddRecipeComponent } from "./component/add-recipe/add-recipe.component";
import { DetailsComponent } from "./component/details/details.component";
import { EditRecipeComponent } from "./component/edit-recipe/edit-recipe.component";

const recipe_ROUTES:Route[]=[
    {path:'',redirectTo:'recipes',pathMatch:'full'},
    {path:'recipes',component:RecipesComponent},
    {path:'editRecipe',component:EditRecipeComponent},
    {path:'addRecipe',component:AddRecipeComponent},
    {path:':id',component:DetailsComponent},

    
  

]
@NgModule({
    declarations:[],
    imports:[
        RouterModule.forChild(recipe_ROUTES)
    ],
    exports:[RouterModule]
})
export class recipeRoutingModele{}