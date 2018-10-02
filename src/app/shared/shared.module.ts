import { ProductCardComponent } from './product-card/product-card.component';
import { DataTableModule } from 'angular-6-datatable';
import { CustomFormsModule } from 'ng2-validation';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    CustomFormsModule,
    FormsModule,
    DataTableModule,
    ProductCardComponent
  ],
  declarations: [ProductCardComponent]
})
export class SharedModule { }
