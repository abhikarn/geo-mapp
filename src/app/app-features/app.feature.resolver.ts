import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WebService, Masters, AppBaseComponent, GeoMapping } from 'app/app-core';
import 'rxjs/add/observable/of'
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


@Injectable()
export class AppGeoMappResolver implements Resolve<any> {
    constructor(private webService: WebService) { }
    resolve(): Observable<any> {
        return this.webService.getGeoMapping();
    }
}

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
