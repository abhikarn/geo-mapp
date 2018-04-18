/* tslint:disable */
import { Injectable } from '@angular/core';
import { UserMaster } from 'app/app-core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
    private _auth: boolean = false;

    constructor(private http: Http) { }

    public get isAuth(): boolean { return this._auth }

    public set isAuth(auth: boolean) {
        this._auth = auth;
    }

    login(userMaster: UserMaster): Observable<any> {
        const headers: Headers = new Headers({
            'Content-Type': 'application/json'
        });
        const options: RequestOptions = new RequestOptions({ headers: headers });
        return this.http.post(`http://localhost:50717/webapi/Login`, userMaster, options);
    }
}
