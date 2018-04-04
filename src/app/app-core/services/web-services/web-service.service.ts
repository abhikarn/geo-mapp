import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ProductSegment } from 'app/app-core';
// import { AppConfig } from '@app/app.config';

@Injectable()
export class WebService {
  // Resolve HTTP using the constructor
  constructor(private httpClient: HttpClient) { }

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
}

