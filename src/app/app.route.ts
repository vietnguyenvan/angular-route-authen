import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AuthGuard } from './common/authen-guard.service';
import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

 export const appRoutes:Routes = [
    {path: "home", component: HomeComponent},
    {path: "login", component: LoginComponent},
    {path: "user", component: UserComponent, canActivate: [AuthGuard]},
    {path: "products", component: ProductsComponent, canActivate: [AuthGuard]},
    {path: "product/:id", component: ProductDetailComponent, canActivate: [AuthGuard]},
    {path: "", redirectTo: "home", pathMatch: "full"},
 ]