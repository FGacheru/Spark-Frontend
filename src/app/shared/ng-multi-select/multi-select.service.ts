import { Injectable, EventEmitter } from '@angular/core';
import { HttpService } from 'src/app/services';



@Injectable({ providedIn: 'root' })
export class MultiSelectService {

  actionsEvent$: EventEmitter<any> = new EventEmitter()

  constructor(private _http: HttpService) {

  }
  search(url: string, pageSize: number, args: string) {
    console.log(args)
    return this._http.get<any>(`${url}?${args}&page_size=${pageSize}`)
  }
}