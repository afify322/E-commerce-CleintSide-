import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "../core/auth-guard.service";
import { LoginRegisterAuthGuardService } from "../core/login-register-auth-guard.service";
import { AuthCompoennt } from "./auth.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

const routes:Routes=[{
    path:'',component:AuthCompoennt
    ,children:[ 
        {path:"signup",component:SignupComponent}
    ,{path:'login',component:LoginComponent}
],canActivate:[LoginRegisterAuthGuardService]
}]
@NgModule({

    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class AuthRouting{}