import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { _throw } from 'rxjs/observable/throw';
import 'rxjs/add/operator/catch';

/**
 * Intercepts the HTTP responses, and in case that an error/exception is thrown, handles it
 * and extract the relevant information of it.
 */
@Injectable()
export class GlobalHttpErrorInterceptor implements HttpInterceptor {
    /**
     * Intercepts an outgoing HTTP request, executes it and handles any error that could be triggered in execution.
     * @see HttpInterceptor
     * @param req the outgoing HTTP request
     * @param next a HTTP request handler
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // if (!req.headers.has('Content-Type')) {
        //     req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        // }

        return next.handle(req)
            .catch(errorReponse => {
                let errMsg: string;
                if (errorReponse instanceof HttpErrorResponse) {
                    const err = errorReponse.message || JSON.stringify(errorReponse.error);
                    errMsg = `${errorReponse.status} - ${errorReponse.statusText || ''} Details: ${err}`;
                } else {
                    errMsg = errorReponse.message ? errorReponse.message : errorReponse.toString();
                }
                console.log(errMsg);
                return _throw(errMsg);
            });
    }
}

/**
 * Provider POJO for the interceptor
 */
// tslint:disable-next-line:variable-name
export const GlobalHttpErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: GlobalHttpErrorInterceptor,
    multi: true
};
