import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

 export const appRoutes:Routes = [
    {path: "login", component: LoginComponent},
    {path: "user", component: UserComponent},
    {path: "admin", component: AdminComponent},
    {path: "", component: HomeComponent},
 ]