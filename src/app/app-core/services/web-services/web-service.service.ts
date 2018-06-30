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
    const type = this.getState<string>('tokentype');
    return new HttpHeaders().set('Authorization', type + ' ' + token);
  }

  private postHeaders() {
    const token = this.getState<string>('authtoken');
    const type = this.getState<string>('tokentype');
    const headers: Headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': type + ' ' + token
    });
    return headers;
  }

  getMasters() {
    // const userModel = this.getState<UserMaster>('usermodel');
    // const httpParams = new HttpParams()
    //   .set('stateId', userModel.stateId.toString());
    return this.httpClient.get(`${environment.apiUrl}Masters`,
      {
        headers: this.getHeaders()
        // params: httpParams
      });
  }
  getProducts() {
    return this.httpClient.get(`api/product`, { headers: this.getHeaders() });
  }

  getGeoMapping() {
    return this.httpClient.get(`${environment.apiUrl}GeoHierarchies`, { headers: this.getHeaders() });
  }

  getSchoolGeoMapping(id) {
    const params = new HttpParams().set('id', id);
    return this.httpClient.get(`${environment.apiUrl}GeoHierarchies`, { headers: this.getHeaders(), params: params });
  }

  getSegment(segmentId: string): Observable<ProductSegment> {
    const params = new HttpParams().set('segmentId', segmentId);
    return this.httpClient.get(`api/segment`, { params: params }) as Observable<ProductSegment>;
  }

  saveGeoHierarchy(geoMapping: GeoMapping): Observable<any> {
    const options: RequestOptions = new RequestOptions({ headers: this.postHeaders() });
    return this.http.post(`${environment.apiUrl}GeoHierarchies`, geoMapping, options);
  }

  saveSchoolMaster(school: School): Observable<any> {
    const options: RequestOptions = new RequestOptions({ headers: this.postHeaders() });
    return this.http.post(`${environment.apiUrl}SchoolMasters`, school, options);
  }

  getSchools(): Observable<School[]> {
    return this.httpClient.get(`${environment.apiUrl}SchoolMasters`,
      { headers: this.getHeaders() }) as Observable<School[]>;
  }

  saveUserMaster(userMaster: UserMaster): Observable<any> {
    const options: RequestOptions = new RequestOptions({ headers: this.postHeaders() });
    return this.http.post(`${environment.apiUrl}Users`, userMaster, options);
  }

  getUsers(): Observable<UserMaster[]> {
    return this.httpClient.get(`${environment.apiUrl}Users`, { headers: this.getHeaders() }) as Observable<UserMaster[]>;
  }

  getZones(countryId: number): Observable<any[]> {
    const httpParams = new HttpParams()
      .set('countryId', countryId.toString());
    console.log(httpParams.toString());
    return this.httpClient.get(`${environment.apiUrl}ZoneMasters`,
      { headers: this.getHeaders(), params: httpParams }) as Observable<any[]>;
  }

  getBranches(zoneId: number): Observable<any[]> {
    const httpParams = new HttpParams()
      .set('zoneId', zoneId.toString());
    console.log(httpParams.toString());
    return this.httpClient.get(`${environment.apiUrl}BranchMasters`,
      { headers: this.getHeaders(), params: httpParams }) as Observable<any[]>;
  }

  getStates(branchId: number): Observable<any[]> {
    const httpParams = new HttpParams()
      .set('branchId', branchId.toString());
    console.log(httpParams.toString());
    return this.httpClient.get(`${environment.apiUrl}StateMasters`,
      { headers: this.getHeaders(), params: httpParams }) as Observable<any[]>;
  }

  getStatesAll(): Observable<any[]> {
    return this.httpClient.get(`${environment.apiUrl}StateMasters`,
      { headers: this.getHeaders() }) as Observable<any[]>;
  }

  getRoleBasedUser(role: string, countryId: number = 0, stateId: number = 0): Observable<UserMaster[]> {
    const httpParams = new HttpParams()
      .set('countryId', countryId.toString())
      .set('stateId', stateId.toString())
      .set('role', role);
    console.log(httpParams.toString());
    return this.httpClient.get(`${environment.apiUrl}Users`,
      { headers: this.getHeaders(), params: httpParams }) as Observable<UserMaster[]>;
  }

  ResetPassword(password: string, oldPassword: string): Observable<any> {
    const userModel = this.getState<UserMaster>('usermodel');
    const params = {
      'password': password,
      'oldPassword': oldPassword,
      'userId': userModel.id.toString()
    };
    const options: RequestOptions = new RequestOptions({ headers: this.postHeaders() });
    return this.http.patch(`${environment.apiUrl}ResetPassword`, params, options);
  }

  getSchoolImage(id) {
    const params = new HttpParams().set('schoolId', id);
    return this.httpClient.get(`${environment.apiUrl}SchoolImage`, { headers: this.getHeaders(), params: params });
  }

  getRoleBasedMasters(id) {
    const params = new HttpParams().set('roleId', id);
    return this.httpClient.get(`${environment.apiUrl}Masters`, { headers: this.getHeaders(), params: params });
  }
}

