/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserMaster } from 'app/app-core';
import { environment } from '@env/environment';
import { Http, RequestOptions, Headers } from '@angular/http';
import { AppBaseComponent } from 'app/app-core/base/app-core-base-component';

import { Observable } from 'rxjs/Observable';
import { Authorization } from '@app/app-core/models/auth.model';

@Injectable()
export class AuthService extends AppBaseComponent {
    private _auth: boolean;
    constructor(private http: Http, private httpClient: HttpClient) {
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

    getToken(authModel: Authorization): Observable<any> {
        console.log(authModel);
        // const userData = {
        //     username: userModel.userName,
        //     password: userModel.userPassword,
        //     grant_type: 'password'
        // };
        return this.httpClient.get(`${environment.apiUrl}Token`);

        // const options: RequestOptions = new RequestOptions({ headers: headers, body: `grant_type=password&username=${authModel.username}&password=${authModel.password}` });
        // return this.http.post(`${environment.originUrl}Token`, authModel, options);
    }
}

