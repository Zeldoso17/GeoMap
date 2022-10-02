import { Injectable } from "@angular/core";
import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PlacesApiClient extends HttpClient {

    public baseUrl: string = 'http://localhost:8000/api/getPlaces';

    constructor( handler: HttpHandler ){
        super(handler);
    }

    public override get<T>(url: string, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        },
        params?: HttpParams | {
            [params: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
        };
    }) {
        url = this.baseUrl + url;

        return super.get<T>( url, {
            headers: {
                ...options?.headers
            },
            params: {
                ...options?.params
            }
        });
    }

}