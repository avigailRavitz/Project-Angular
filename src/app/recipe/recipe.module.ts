import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SmallRecipeComponent } from './component/small-recipe/small-recipe.component';
import { recipeRoutingModele } from './recipeRouting.module';
import { RecipesComponent } from './component/recipes/recipes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SmallRecipeComponent } from './component/small-recipe/small-recipe.component';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { StarsPipe } from '../stars.pipe';
import { DetailsComponent } from './component/details/details.component';
import { MatIconModule} from '@angular/material/icon';
// import { CategoryService } from '../../category.service';
import {MatDividerModule} from '@angular/material/divider';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { EditRecipeComponent } from './component/edit-recipe/edit-recipe.component';
import { AddRecipeComponent } from './component/add-recipe/add-recipe.component';
import { DurationPipe } from '../during.pipe';
import {MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
  declarations: [SmallRecipeComponent ,RecipesComponent,DetailsComponent,EditRecipeComponent,AddRecipeComponent,DurationPipe],
  imports: [

    ReactiveFormsModule,
    FormsModule,
    MatCardModule, 
    MatButtonModule,
    StarsPipe,
    MatIconModule,
    MatDividerModule,
    NavBarComponent,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatOptionModule,
    MatCheckboxModule,
    
    MatSidenavModule,
    MatButtonModule
],
  exports:[RecipesComponent,recipeRoutingModele]
})
export class RecipeModule { }
