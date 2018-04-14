import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http, RequestOptions, Headers } from '@angular/http';
// import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ProductSegment, GeoMapping, School } from 'app/app-core';
// import { AppConfig } from '@app/app.config';

@Injectable()
export class WebService {
  // Resolve HTTP using the constructor
  constructor(private httpClient: HttpClient, private http: Http) { }

  getLayout() {
    return this.httpClient.get(`api/layout`);
  }

  getProducts() {
    const headers = new HttpHeaders().set('Cache-Control', 'no-cache').set('If-Modified-Since', '0');
    return this.httpClient.get(`api/product`, { headers: headers });
  }

  getGeoMapping() {
    const headers = new HttpHeaders().set('Cache-Control', 'no-cache').set('If-Modified-Since', '0');
    return this.httpClient.get(`api/geomapping`, { headers: headers });
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
      'Content-Type': 'application/json'
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
    const headers = new HttpHeaders().set('Cache-Control', 'no-cache').set('If-Modified-Since', '0');
    return this.httpClient.get(`http://localhost:50717/webapi/SchoolMasters`, { headers: headers }) as Observable<School[]>;
  }
}

