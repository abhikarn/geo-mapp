import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WebService } from 'app/app-core';

@Injectable()
export class AppFeatureResolver implements Resolve<any> {
    constructor(private webService: WebService) { }
    resolve(): Observable<any> {
        return this.webService.getLayout();
    }
}
