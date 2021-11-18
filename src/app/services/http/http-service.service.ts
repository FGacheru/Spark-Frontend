import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const clientId = environment.APIClientID;
const endpoint = environment.APIEndpoint;
const endpointV1 = environment.APIv1Endpoint;


@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private _httpClient : HttpClient) {

  }

  get<T>(url: string):Observable<any> {
    return this._httpClient.get<any>(`${endpointV1}${url}`);
  }

  delete<T>(url: string):Observable<any> {
    return this._httpClient.delete<any>(`${endpointV1}${url}`);
  }


  post<T>(url: any, formData: any):Observable<any>  {
   return this._httpClient.post(`${endpointV1}${url}`,formData);
  }

  filePost<T>(url: any, formData: any):Observable<any>{
    return this._httpClient.post(`${endpointV1}${url}`,formData, {responseType: 'blob'})
  }

  patch<T>(url: any, formData: any) {
    return this._httpClient.patch(`${endpointV1}${url}`,formData);
  }



}
