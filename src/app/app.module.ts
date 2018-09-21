import { AuthGuard } from './common/authen-guard.service';
import { AuthenService } from './service/authen.service';
import { appRoutes } from './app.route';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, ActivatedRouteSnapshot } from '@angular/router';
import { NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    UserComponent,
    AdminComponent,
    HomeComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [AuthenService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
