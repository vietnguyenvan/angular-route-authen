import { ProductDetailComponent } from './admin/product-detail/product-detail.component';
import { AuthGuard } from './core/authen-guard.service';
import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './core/login/login.component';
import { AdminProductsComponent } from './admin/products/admin-products.component';
import { ProductComponent } from './product/product.component';

 export const appRoutes:Routes = [
    {path: "", component: ProductComponent},
    {path: "login", component: LoginComponent},
    {path: "user", component: UserComponent, canActivate: [AuthGuard]},
    {path: "admin/products", component: AdminProductsComponent, canActivate: [AuthGuard]},
    {path: "admin/product/:id", component: ProductDetailComponent, canActivate: [AuthGuard]},
 ]