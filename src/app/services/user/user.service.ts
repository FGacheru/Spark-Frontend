import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { StorageService } from 'src/app/services';
import { HttpService } from '../http/http-service.service';



@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: any;

  constructor(
    private _http: HttpService,
    private _storageService: StorageService
  ) {}

  userProfile(): Observable<any> {
    return this._http.get<any>('users/me').pipe(
      map(res => {
        console.log('THE USER PROFILE', res);
        this._storageService.setItem('userDetails', JSON.stringify(res));
        return res;
      })
    );
  }

  editUserProfile(data: any) {
    return this._http.patch('users/me', data).pipe(
      map(res => {
        this._storageService.setItem('userDetails', JSON.stringify(res));
        return res;
      })
    );
  }

  uploadUserImage(data: any) {
    // const options = {
    //   params: new HttpParams(),
    //   reportProgress: true,
    // }
    return this._http.patch<any>('users/me/profile', data).pipe(
      map(res => {
        // localStorage.setItem('userDetails', JSON.stringify(res));
        this._storageService.setItem('userDetails', JSON.stringify(res));
        return res;
      })
    );
  }
}
