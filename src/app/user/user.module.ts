import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModele } from './userRouting.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
 import { RegisterComponent } from './components/register/register.component';
import { LogOutComponent } from './components/log-out/log-out.component';

@NgModule({
  declarations: [LoginComponent,RegisterComponent,LogOutComponent],
  imports: [
    CommonModule,
    UserRoutingModele,
    ReactiveFormsModule,
    FormsModule
    
  ],
  exports:[LoginComponent]
})
export class UserModule { }
