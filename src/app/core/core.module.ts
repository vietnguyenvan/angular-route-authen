import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthenService } from './authen.service';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './authen-guard.service';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [LoginComponent, NavbarComponent],
    exports: [ LoginComponent, NavbarComponent ],
    imports: [ CommonModule, RouterModule, NgbModule ],
    providers: [ AuthenService, AuthGuard ]
})

export class CoreModule { }