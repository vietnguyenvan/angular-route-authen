import { AuthenService } from './authen.service';
import { CanActivate } from "@angular/router/src/interfaces";
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auth: AuthenService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.auth.isLogedIn()) 
            return true;
            
        this.router.navigate(["/login"], {queryParams: {returnUrl: state.url}});
        return false;
    }
    
}