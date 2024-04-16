import { Component, OnInit } from '@angular/core';
import { RecipteService } from '../recipe/recipte.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})

export class NavBarComponent implements OnInit {
  recipeCount$: Observable<number> | undefined;

  constructor(private recipeService: RecipteService) { }

  ngOnInit(): void {
    this.recipeCount$ = this.recipeService.getRecipeCount();
  }
}