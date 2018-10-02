import { AppRoutingModule } from './../app-routing/app-routing.module';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthenService } from './authen.service';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { NgModule} from '@angular/core';
import { AuthGuard } from './authen-guard.service';

@NgModule({
    declarations: [LoginComponent, NavbarComponent],
    exports: [ LoginComponent, NavbarComponent ],
    imports: [ CommonModule, NgbModule, AppRoutingModule ],
    providers: [ AuthenService, AuthGuard ]
})

export class CoreModule { }