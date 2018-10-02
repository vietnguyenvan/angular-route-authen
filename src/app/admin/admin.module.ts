import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NgModule } from '@angular/core';
import { AdminProductsComponent } from './products/admin-products.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing/app-routing.module';


@NgModule({
  imports: [CommonModule, AppRoutingModule, SharedModule],
  exports: [
    ProductDetailComponent,
    AdminProductsComponent
  ],
  declarations: [
    ProductDetailComponent,
    AdminProductsComponent
  ]
})
export class AdminModule { }
