/* tslint:disable */
import { Injectable } from '@angular/core';
import { UserMaster } from 'app/app-core';
import { environment } from '@env/environment';
import { Http, RequestOptions, Headers } from '@angular/http';
import { AppBaseComponent } from 'app/app-core/base/app-core-base-component';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService extends AppBaseComponent {
    private _auth: boolean;
    constructor(private http: Http) {
        super();
    }

    public get isAuth(): boolean {
        this._auth = this.isAuthenticated;
        return this._auth;
    }

    public set isAuth(auth: boolean) {
        this._auth = auth;
    }

    login(userMaster: UserMaster): Observable<any> {
        const headers: Headers = new Headers({
            'Content-Type': 'application/json'
        });
        const options: RequestOptions = new RequestOptions({ headers: headers });
        return this.http.post(`${environment.apiUrl}Login`, userMaster, options);
    }
}

