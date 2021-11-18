import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services';

@Injectable({
  providedIn: 'root'
})
export class TableServiceService {

  getFilters$: EventEmitter<any> = new EventEmitter();

  actionListeners : EventEmitter<any> = new EventEmitter(); 
  
  constructor(private _httpService:HttpService) { }

  getList(typeUrl: string, page_size: number, page: number, filters: Array<any>, searchInput: string,append : boolean): Observable<any> {



    return this._httpService.get<any>(`${typeUrl}${append ? '&' :'?'}page_size=${page_size}&page=${page}&${filters}`);
  }

  
  getJoinedFilters(data: any) {
    this.getFilters$.emit(data);
  }

  doAction(action : string, data : any){
   this.actionListeners.emit({ action : action, data : data})
  }

}
