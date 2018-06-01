import { Injectable } from '@angular/core';
import {
    CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot
} from '@angular/router';
import { AuthService, AppBaseComponent, UserMaster } from '@app/app-core';

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

@Injectable()
export class CanActivateHomeGuard extends AppBaseComponent implements CanActivate {

    constructor(public router: Router) {
        super();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log(route);
        const userModel = this.getState<UserMaster>('usermodel');
        if (!!userModel) {
            if (userModel.notFirstLogin) {
                return true;
            } else {
                if (state.url === '/engage/reset-password') {
                    return true;
                } else {
                    this.router.navigate(['engage/reset-password']);
                    return false;
                }
            }
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }
}
