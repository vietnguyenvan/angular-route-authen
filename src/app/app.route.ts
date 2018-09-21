import { AuthGuard } from './common/authen-guard.service';
import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

 export const appRoutes:Routes = [
    {path: "home", component: HomeComponent},
    {path: "login", component: LoginComponent},
    {path: "user", component: UserComponent, canActivate: [AuthGuard]},
    {path: "admin", component: AdminComponent, canActivate: [AuthGuard]},
    {path: "", redirectTo: "home", pathMatch: "full"},
 ]