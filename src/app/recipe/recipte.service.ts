import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../entities/Recipe.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipteService {

  constructor(private http : HttpClient) { }

  getRecipeList(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('https://localhost:7268/api/Recipe')}

    getRecipeById(id:number): Observable<Recipe> {

      console.log("tryDelet",id)
      return this.http.get<Recipe>(`https://localhost:7268/api/Recipe/${id}`)}

  setNewRecipe(recipe: Recipe): Observable<Recipe[]> {
    console.log("postttttttttttttttttttttttttttttttttttttttt")
    console.log("recipe",recipe)
    return this.http.post<Recipe[]>('https://localhost:7268/api/Recipe',recipe);
    
  }


  updateRecipe(recipe:Recipe,id:number): Observable<Recipe> {
    return this.http.put(`https://localhost:7268/api/Recipe/${id}`,recipe)}

  deleteRecipe(id:number): Observable<void> {
    console.log("deletRecipe",id)
    return this.http.delete<void>(`https://localhost:7268/api/User/${id}`);}
  
  }





