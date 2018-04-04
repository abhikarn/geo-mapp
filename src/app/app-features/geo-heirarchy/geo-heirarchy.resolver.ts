import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { WebService, ProductSegment, AppBaseComponent, Masters, GeoMapping } from 'app/app-core';
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
export class AppGeoMappingDetail extends AppBaseComponent implements Resolve<GeoMapping> {
    constructor() {
        super();
    }
    resolve(route: ActivatedRouteSnapshot): Observable<GeoMapping> {
        const geoMapp = this.getState<GeoMapping>('geoMap');
        console.log(<string>route.params['id']);
        return Observable.of(geoMapp);
    }
}

@Injectable()
export class AppMasterResolver implements Resolve<any> {
    constructor() { }
    resolve(): Observable<any> {
        return Observable.of(Masters);
    }
}

@Injectable()
export class AppGeoMappResolver implements Resolve<any> {
    constructor(private webService: WebService) { }
    resolve(): Observable<any> {
        return this.webService.getGeoMapping();
    }
}
