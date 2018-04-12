import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WebService, Masters } from 'app/app-core';

@Injectable()
export class AppFeatureResolver implements Resolve<any> {
    constructor(private webService: WebService) { }
    resolve(): Observable<any> {
        return this.webService.getLayout();
    }
}

@Injectable()
export class AppFeatureMasterResolver implements Resolve<any> {
    constructor() { }
    resolve(): Observable<any> {
        return Observable.of(Masters);
    }
}
