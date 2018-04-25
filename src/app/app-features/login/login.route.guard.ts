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
<<<<<<< HEAD
            // return false;
=======
            if (this.router.url === '/' || this.router.url === '/login') {
                this.router.navigate(['engage']);
            }
            return false;
>>>>>>> 852bd57641d03503bf6b82cb8ef203ddb286c1d0
        }

        return true;
    }
}
