import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestclientService {

  constructor(private http: HttpClient) { }

  get(url: string, params?: HttpParams): Observable<string> {
    const headers = new HttpHeaders({
      Accept: 'text/plain',
      'x-client-id': environment.clientID,
      'x-client-secret': environment.clientSecret,
      'x-source-code': environment.sourceCode
    });

    return this.http.get(url, { headers, params, responseType: 'text' });
  }

  post(data: any, url: string, params?: HttpParams): Observable<string> {
    const headers = new HttpHeaders({
      'Content-Type': 'text/plain',
      'x-client-id': environment.clientID,
      'x-client-secret': environment.clientSecret,
      'x-source-code': environment.sourceCode
    });

    return this.http.post(url, data, { headers, params, responseType: 'text' } );
  }

  postFormData<T>(data: any, url: string, params?: HttpParams): Observable<T> {
    const headers = new HttpHeaders({
      'x-client-id': environment.clientID,
      'x-client-secret': environment.clientSecret,
      'x-source-code': environment.sourceCode
    });

    return this.http.post<T>(url, data, { headers, params } );
  }
}
