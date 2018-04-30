import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
    WebService, AppBaseComponent,
    GeoMapping, School, UserMaster
} from 'app/app-core';
import 'rxjs/add/observable/of';
@Injectable()
export class AppFeatureResolver implements Resolve<any> {
    constructor(private webService: WebService) { }
    resolve(): Observable<any> {
        return this.webService.getLayout();
    }
}

@Injectable()
export class AppFeatureMasterResolver implements Resolve<any> {
    constructor(private webService: WebService) { }
    resolve(): Observable<any> {
        return this.webService.getMasters();
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

@Injectable()
export class AppSchoolListResolver implements Resolve<School[]> {
    constructor(private webService: WebService) { }
    resolve(): Observable<School[]> {
        return this.webService.getSchoolAll();
    }
}

@Injectable()
export class AppUserListResolver implements Resolve<UserMaster[]> {
    constructor(private webService: WebService) { }
    resolve(): Observable<UserMaster[]> {
        return this.webService.getUsers();
    }
}
