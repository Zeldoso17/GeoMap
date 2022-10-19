import { Injectable } from "@angular/core";
import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class loginApi extends HttpClient {

    public baseUrl: string = 'http://localhost:8000/api/auth';

    constructor( handler: HttpHandler ){
        super(handler);
    }

    public override post<T>(url: string, options?: {
        
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        },
    }) {
        url = this.baseUrl + url;

        return super.get<T>( url, {
            headers: {
                ...options?.headers
            }
        });
    }

}