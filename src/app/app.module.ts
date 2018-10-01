import { ProductService } from './service/product.service';
import { CategoryService } from './service/category.service';
import { AuthGuard } from './common/authen-guard.service';
import { AuthenService } from './service/authen.service';
import { appRoutes } from './app.route';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation'
import { FormsModule } from '@angular/forms';
import {DataTableModule} from "angular-6-datatable";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminProductsComponent } from './admin/products/admin-products.component';
import { ProductDetailComponent } from './admin/product-detail/product-detail.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    UserComponent,
    LogoutComponent,
    AdminProductsComponent,
    ProductDetailComponent,
    ProductCardComponent,
    ProductComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    CustomFormsModule,
    FormsModule,
    DataTableModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [AuthenService, AuthGuard, CategoryService, ProductService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
