import { Route, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { NgModule } from "@angular/core";
import { RegisterComponent } from "./components/register/register.component";

const USER_ROUTES:Route[]=[
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent}
]
@NgModule({
    declarations:[],
    imports:[
        RouterModule.forChild(USER_ROUTES)
    ],
    exports:[RouterModule]
})
export class UserRoutingModele{}