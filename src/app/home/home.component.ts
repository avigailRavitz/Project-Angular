import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
// import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
