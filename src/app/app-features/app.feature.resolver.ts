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
export class AppSchoolGeoMappingDetail implements Resolve<any> {
    constructor(private webService: WebService) {
    }
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        const id = <string>route.params['id'];
        console.log('<string>route.paramd');
        console.log(<string>route.params['id']);
        return this.webService.getSchoolGeoMapping(id);
    }
}


@Injectable()
export class AppSchoolListResolver implements Resolve<School[]> {
    constructor(private webService: WebService) { }
    resolve(): Observable<School[]> {
        return this.webService.getSchools();
    }
}

@Injectable()
export class AppSchoolResolver extends AppBaseComponent implements Resolve<School> {
    constructor() {
        super();
    }
    resolve(route: ActivatedRouteSnapshot): Observable<School> {
        const school = this.getState<School>('schoolMaster');
        console.log(<string>route.params['id'], 'School');
        return Observable.of(school);
    }
}

@Injectable()
export class AppUserListResolver implements Resolve<UserMaster[]> {
    constructor(private webService: WebService) { }
    resolve(): Observable<UserMaster[]> {
        return this.webService.getUsers();
    }
}

@Injectable()
export class AppSupervisorListResolver implements Resolve<UserMaster[]> {
    constructor(private webService: WebService) { }
    resolve(): Observable<UserMaster[]> {
        return this.webService.getRoleBasedUser('Supervisor');
    }
}

@Injectable()
export class AppHierarchyUserListResolver implements Resolve<UserMaster[]> {
    constructor(private webService: WebService) { }
    resolve(): Observable<UserMaster[]> {
        return this.webService.getRoleBasedUser('Marketing User');
    }
}

@Injectable()
export class AppSchoolImageResolver implements Resolve<any> {
    constructor(private webService: WebService) {
    }
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        const id = <string>route.params['id'];
        return this.webService.getSchoolImage(id);
    }
}
