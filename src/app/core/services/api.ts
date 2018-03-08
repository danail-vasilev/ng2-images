import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class Api {
    private static readonly HEADERS: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    constructor(private http: HttpClient) { }

    get(path: string): Observable<any> {
        let headers = new HttpHeaders({});
        headers = this.getHeaders();
        return this.http.get(
            `${environment.baseUrl}${path}`, {
                headers: headers
            })
            .catch(this.handleErrors);
    }

    post(path: string, data): Observable<any> {
        const headers = this.getHeaders();
        return this.http.post(
            `${environment.baseUrl}${path}`, data, { headers: headers, responseType: 'json' })
            .catch(this.handleErrors);
    }

    private getHeaders(): HttpHeaders {
        return Api.HEADERS;
    }

    private handleErrors(response): Observable<any> {
        let error = null;
        if (response.error) {
            console.log('error', response.error);
            error = (typeof(response.error) === 'string') ? JSON.parse(response.error) : response.error ;
        }

        if (error.message === 'Post limit, maximum pastes per 24h reached') {
            error.name = 'MaxPostLimitError';
        }

        return Observable.throw(error || { name: 'Server-Side Error', message: 'Server-Side Error' });
    }
}
