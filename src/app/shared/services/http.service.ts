import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoaderService } from './loader.service';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

    constructor(
      private http: HttpClient,
      private loaderService: LoaderService
  ) {

  }

  get(url: string, withLoad: boolean, headers?: any): Observable<any> {
    if (withLoad) {
        this.loaderService.showLoad();
    }
    return this.http.get(`${environment.api_url}${url}`, headers).pipe(
        map(response => {
            if (withLoad) {
                this.loaderService.hideLoad();
            }
            return response;
        })
    )
  }

  post(url: string, body: any, headers?: any): Observable<any> {
    return this.http.post(`${environment.api_url}${url}`, body, headers).pipe(
        map(response => {
            return response;
        })
    )
  };

  put(url: string, body: any, withLoad: boolean, headers?: any): Observable<any> {
    if (withLoad) {
        this.loaderService.showLoad();
    }
    return this.http.put(`${environment.api_url}${url}`, body, headers).pipe(
        map(response => {
            if (withLoad) {
                this.loaderService.hideLoad();
            }
            return response;
        })
    )
  };

  delete(url: string, body: any, withLoad: boolean): Observable<any> {
    if (withLoad) {
        this.loaderService.showLoad();
    }
    return this.http.request('delete', `${environment.api_url}${url}`, { body: body }).pipe(
        map(response => {
            if (withLoad) {
                this.loaderService.hideLoad();
            }
            return response;
        })
    )
  };


}
