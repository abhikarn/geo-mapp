import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http, RequestOptions, Headers } from '@angular/http';
// import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ProductSegment, GeoMapping, School, UserMaster } from 'app/app-core';
import { AppBaseComponent } from 'app/app-core/base/app-core-base-component';
import { environment } from '@env/environment';

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
    return new HttpHeaders().set('authtoken', token);
  }

  getMasters() {
    const userModel = this.getState<UserMaster>('usermodel');
    let httpParams = new HttpParams()
      .set('countryId', userModel.countryId.toString())
      .set('stateId', userModel.stateId.toString())
      .set('cityId', userModel.cityId.toString());
    return this.httpClient.get(`${environment.apiUrl}Masters`, { params: httpParams });
  }
  getProducts() {
    return this.httpClient.get(`api/product`, { headers: this.getHeaders() });
  }

  getGeoMapping() {
    return this.httpClient.get(`${environment.apiUrl}GeoHierarchies`);
  }

  getSegment(segmentId: string): Observable<ProductSegment> {
    const params = new HttpParams().set('segmentId', segmentId);
    return this.httpClient.get(`api/segment`, { params: params }) as Observable<ProductSegment>;
  }

  saveGeoHierarchy(geoMapping: GeoMapping): Observable<any> {
    const headers: Headers = new Headers({
      'Content-Type': 'application/json',
      'auth-token': this.getState<string>('authtoken')
    });
    const options: RequestOptions = new RequestOptions({ headers: headers });
    return this.http.post(`${environment.apiUrl}GeoHierarchies`, geoMapping, options);
  }

  saveSchoolMaster(school: School): Observable<any> {
    const headers: Headers = new Headers({
      'Content-Type': 'application/json',
      'auth-token': this.getState<string>('authtoken')
    });
    const options: RequestOptions = new RequestOptions({ headers: headers });
    return this.http.post(`${environment.apiUrl}SchoolMasters`, school, options);
  }

  getSchools(): Observable<School[]> {
    const userModel = this.getState<UserMaster>('usermodel');
    let httpParams = new HttpParams()
      .set('countryId', userModel.countryId.toString())
      .set('stateId', userModel.stateId.toString())
      .set('cityId', userModel.cityId.toString());
    console.log(httpParams.toString());
    return this.httpClient.get(`${environment.apiUrl}SchoolMasters`, { headers: this.getHeaders(), params: httpParams }) as Observable<School[]>;
  }

  saveUserMaster(userMaster: UserMaster): Observable<any> {
    const headers: Headers = new Headers({
      'Content-Type': 'application/json'
    });
    const options: RequestOptions = new RequestOptions({ headers: headers });
    return this.http.post(`${environment.apiUrl}Users`, userMaster, options);
  }

  getUsers(): Observable<UserMaster[]> {
    return this.httpClient.get(`${environment.apiUrl}Users`, { headers: this.getHeaders() }) as Observable<UserMaster[]>;
  }
}

