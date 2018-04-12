import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Masters } from 'app/app-core';

@Injectable()
export class AppSchoolMasterResolver implements Resolve<any> {
    constructor() { }
    resolve(): Observable<any> {
        return Observable.of(Masters);
    }
}
