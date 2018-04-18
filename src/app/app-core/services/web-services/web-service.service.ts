import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http, RequestOptions, Headers } from '@angular/http';
// import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ProductSegment, GeoMapping, School, UserMaster } from 'app/app-core';
import { AppBaseComponent} from 'app/app-core/base/app-core-base-component';
// import { AppConfig } from '@app/app.config';

@Injectable()
export class WebService extends AppBaseComponent {
  // Resolve HTTP using the constructor
  constructor(private httpClient: HttpClient, private http: Http) {
    super();
  }

  getLayout() {
    return this.httpClient.get(`api/layout`);
  }

  private getHeaders() {
    const token = this.getState<string>('authtoken');
    return new HttpHeaders().set('auth-token', token);
  }

  getMasters() {

    return this.httpClient.get(`http://localhost:50717/webapi/Masters`, { headers: this.getHeaders() });
  }
  getProducts() {
    // const headers = new HttpHeaders().set('Cache-Control', 'no-cache').set('If-Modified-Since', '0');
    return this.httpClient.get(`api/product`, { headers: this.getHeaders() });
  }

  getGeoMapping() {
    // const headers = new HttpHeaders().set('Cache-Control', 'no-cache').set('If-Modified-Since', '0');
    return this.httpClient.get(`http://localhost:50717/webapi/GeoHierarchies`, { headers: this.getHeaders() });
  }

  getSegment(segmentId: string): Observable<ProductSegment> {
    const params = new HttpParams().set('segmentId', segmentId);
    return this.httpClient.get(`api/segment`, { params: params }) as Observable<ProductSegment>;
  }

  saveGeoHierarchy(geoMapping: GeoMapping): Observable<any> {
    // const params = new HttpParams().set('segmentId', segmentId);
    // const headers: Headers = new Headers({
    //   "Access-Control-Allow-Origin": "*",
    //   "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    //   "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    // });
    const headers: Headers = new Headers({
      'Content-Type': 'application/json',
      'auth-token': '123333'
    });
    const options: RequestOptions = new RequestOptions({ headers: headers });
    // const headers =  new HttpHeaders().set( 'Access-Control-Expose-Headers','Access-Control-Allow-Origin');
    return this.http.post(`http://localhost:50717/webapi/GeoHierarchies`, geoMapping, options);
  }

  saveSchoolMaster(school: School): Observable<any> {
    // const params = new HttpParams().set('segmentId', segmentId);
    // const headers: Headers = new Headers({
    //   "Access-Control-Allow-Origin": "*",
    //   "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    //   "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    // });
    const headers: Headers = new Headers({
      'Content-Type': 'application/json'
    });
    const options: RequestOptions = new RequestOptions({ headers: headers });
    // const headers =  new HttpHeaders().set( 'Access-Control-Expose-Headers','Access-Control-Allow-Origin');
    return this.http.post(`http://localhost:50717/webapi/SchoolMasters`, school, options);
  }

  getSchools(): Observable<School[]> {
    // const headers = new HttpHeaders().set('Cache-Control', 'no-cache').set('If-Modified-Since', '0');
    return this.httpClient.get(`http://localhost:50717/webapi/SchoolMasters`, { headers: this.getHeaders() }) as Observable<School[]>;
  }

  saveUserMaster(userMaster: UserMaster): Observable<any> {
    // const params = new HttpParams().set('segmentId', segmentId);
    // const headers: Headers = new Headers({
    //   "Access-Control-Allow-Origin": "*",
    //   "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    //   "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    // });
    const headers: Headers = new Headers({
      'Content-Type': 'application/json'
    });
    const options: RequestOptions = new RequestOptions({ headers: headers });
    // const headers =  new HttpHeaders().set( 'Access-Control-Expose-Headers','Access-Control-Allow-Origin');
    return this.http.post(`http://localhost:50717/webapi/Users`, userMaster, options);
  }

  getUsers(): Observable<UserMaster[]> {
    // const headers = new HttpHeaders().set('Cache-Control', 'no-cache').set('If-Modified-Since', '0');
    return this.httpClient.get(`http://localhost:50717/webapi/Users`, { headers: this.getHeaders() }) as Observable<UserMaster[]>;
  }
}

