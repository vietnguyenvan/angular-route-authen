import { ProductDetailComponent } from './admin/product-detail/product-detail.component';
import { AuthGuard } from './common/authen-guard.service';
import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminProductsComponent } from './admin/products/admin-products.component';

 export const appRoutes:Routes = [
    {path: "home", component: HomeComponent},
    {path: "login", component: LoginComponent},
    {path: "user", component: UserComponent, canActivate: [AuthGuard]},
    {path: "admin/products", component: AdminProductsComponent, canActivate: [AuthGuard]},
    {path: "admin/product/:id", component: ProductDetailComponent, canActivate: [AuthGuard]},
    {path: "", redirectTo: "home", pathMatch: "full"},
 ]