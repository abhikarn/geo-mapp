import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { WebService, ProductSegment, AppBaseComponent } from 'app/app-core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/forkJoin';
@Injectable()
export class AppProductResolver implements Resolve<any> {
    constructor(private webService: WebService) {
    }
    resolve(): Observable<any> {
        return this.webService.getProducts();
    }
}
/**
 * Data Resolvers used for configuration
*/
@Injectable()
export class AppProductSegmentResolver extends AppBaseComponent implements Resolve<ProductSegment> {
    constructor(private webService: WebService) {
        super();
    }
    resolve(route: ActivatedRouteSnapshot): Observable<ProductSegment> {
        const segment = this.getState<ProductSegment>('segment');
        console.log(<string>route.params['id']);
        console.log(this.webService);
        // return Observable.forkJoin(
        return Observable.of(segment);
        // return this.webService.getSegment(<string>route.params['id']);
        // Observable.of('gsdg'),
        // );
        // return this.service.getSegment(<string>route.params['id']);
    }
}

@Injectable()
export class AppProductCoverageResolver implements Resolve<any> {
    constructor() { }
    resolve(): Observable<any> {
        return Observable.of('test data');
    }
}
