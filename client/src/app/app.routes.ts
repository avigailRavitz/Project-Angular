import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'user',  loadChildren: () => import('./user/user.module').then(c => c.UserModule) },
    {path:'home',component:HomeComponent},
    { path: 'recipes',loadChildren: ()=>import('./recipe/recipe.module').then(c=>c.RecipeModule)},
   
];
