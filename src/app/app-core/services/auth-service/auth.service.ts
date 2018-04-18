/* tslint:disable */
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    private _auth: boolean = false;

    constructor() { }

    public get isAuth(): boolean { return this._auth }

    public set isAuth(auth: boolean) {
        this._auth = auth;
    }
}
