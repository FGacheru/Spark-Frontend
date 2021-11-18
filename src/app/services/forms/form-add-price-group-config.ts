import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { ToastNotificationsService } from "src/app/shared/toast-notifications/toast-notifications.service";
import { HttpService } from "../http/http-service.service";

@Injectable({
    providedIn : 'root'
})
export class FormAddPriceGroupConfigService{
    // selectedTab: string = '';
    selectedTabChange: Subject<string> = new Subject<string>();

  
    constructor(
      private _http: HttpService,
      private _toastService: ToastNotificationsService
    ) { 

    }
  
    postForm(isNew: boolean, data: any) {
      let request: Observable<any>;
      if (isNew) {
        request = this._http.post<any>(data.url, data.formData)
          .pipe(
            tap(data => {
              this._toastService.showToast("Successfully added Record", "success");
            }),
            catchError((err, caught) => {
              console.log(err)
              console.log(caught);
    
              this._toastService.showToast("Error Posting Record", "danger");
              return Observable.throw(err);
           })
          );
      } else {
        request = this._http.patch<any>(data.url, data.formData)
        .pipe(
          tap(data => {
            this._toastService.showToast("Successfully edited Record", "success");
          }),
          catchError((err, caught) => {
            this._toastService.showToast("Error editing Record", "danger");
            return Observable.throw(err);
          })
        );
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