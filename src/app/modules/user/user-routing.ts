import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { UserProfileComponent } from "./Components/user-profile/user-profile.component";

const routes: Routes = [
    {
        path: 'admin', component: AdminComponent
    },
    {path:'profile', component:UserProfileComponent}

]

@NgModule({

    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRouting { }