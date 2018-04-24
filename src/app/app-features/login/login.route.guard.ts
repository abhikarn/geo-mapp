import { Injectable } from '@angular/core';
import {
    CanActivate, Router
} from '@angular/router';
import { AuthService } from '@app/app-core';

@Injectable()
export class CanLoginRouteGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate(): boolean {
        if (this.authService.isAuth) {
            if (this.router.url === '/' || this.router.url === '/login') {
                this.router.navigate(['engage']);
            }
            return false;
        }

        return true;
    }
}
