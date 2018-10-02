import { CoreModule } from './core/core.module';
import { ProductService } from './service/product.service';
import { CategoryService } from './service/category.service';
import { appRoutes } from './app.route';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CustomFormsModule } from 'ng2-validation'
import { FormsModule } from '@angular/forms';
import {DataTableModule} from "angular-6-datatable";

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminProductsComponent } from './admin/products/admin-products.component';
import { ProductDetailComponent } from './admin/product-detail/product-detail.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminProductsComponent,
    ProductDetailComponent,
    ProductCardComponent,
    ProductComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CustomFormsModule,
    FormsModule,
    DataTableModule,
    CoreModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [ CategoryService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
