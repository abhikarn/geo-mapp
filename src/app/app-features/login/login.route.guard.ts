import { Injectable } from '@angular/core';
import {
    CanActivate
} from '@angular/router';
import { AuthService } from '@app/app-core';

@Injectable()
export class CanLoginRouteGuard implements CanActivate {

    constructor(private authService: AuthService) { }

    canActivate(): boolean {
        if (this.authService.isAuth) {
            // return false;
        }
        return true;
    }
}
