import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { CoreModule } from './core/core.module';
import { AdminModule } from './admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';

import { ProductService } from './service/product.service';
import { CategoryService } from './service/category.service';
import { DataTableModule } from 'angular-6-datatable';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CustomFormsModule,
    FormsModule,
    DataTableModule,
    SharedModule,
    CoreModule,
    AppRoutingModule,
    AdminModule
  ],
  providers: [ CategoryService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
