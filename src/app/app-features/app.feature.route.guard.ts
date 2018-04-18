import { Injectable } from '@angular/core';
import {
    CanActivate, Router
} from '@angular/router';
import { AuthService } from '@app/app-core';

@Injectable()
export class CanActivateRouteGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate(): boolean {
        if (this.authService.isAuth) {
            return true;
        } else {
            this.router.navigate(['login']);
        }
    }
}
