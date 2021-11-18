import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import {  Observable, ObservableInput, of, Subject } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';
import { catchError } from 'rxjs/operators';
import { ToastNotificationsService } from 'src/app/shared/toast-notifications/toast-notifications.service';
import { HttpService } from '../http/http-service.service';

@Injectable({
  providedIn: 'root',
})
export class FormItemService {
  selectedTab: string = '';
  selectedTabChange: Subject<string> = new Subject<string>();


  constructor(
    private _http: HttpService,
    private _toastService: ToastNotificationsService
  ) {   }

  postForm(isNew: boolean, data: any) {
    let request: Observable<any>;
    if (isNew) {
      request = this._http.post<any>(data.url, data.formData)
        .pipe(
          tap(data => {
            this._toastService.showToast("Successfully added Record", "success");
          }),
        );
    } else {
      request = this._http.patch<any>(data.url, data.formData)
      .pipe(
        tap(data => {
          this._toastService.showToast("Successfully edited Record", "success");
        }),
      )
      ;
    }
    return request
  }


  postFile(isNew: boolean, data: any) {
    let request: Observable<any>;
    if (isNew) {
      request = this._http.filePost<any>(data.url, data.formData)
        .pipe(
          tap(data => {
            this._toastService.showToast("Successfully added Record", "success");
          }),
        );
    } else {
      request = this._http.patch<any>(data.url, data.formData)
        .pipe(
          tap(data => {
            this._toastService.showToast("Successfully edited Record", "success");
          }),
        )
      ;
    }
    return request
  }




  formDropdownSelectedTab(data: string) {
    console.log('THE SELECTED TAB IN SERVICE', data);
    this.selectedTabChange.next(data);
  }

  getDropdownValues(url:string){
    return this._http.get<any>(url);
  }
}
