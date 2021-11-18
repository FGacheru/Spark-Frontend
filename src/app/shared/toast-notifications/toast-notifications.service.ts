import { Injectable, TemplateRef } from '@angular/core';
import { Subject, Observable, BehaviorSubject, of } from 'rxjs';

export interface Notice {
  message: string;
  style: string;
}
@Injectable({
  providedIn: 'root'
})

export class ToastNotificationsService {
  constructor() { }
  toastData: any = [];
  public toasts = new BehaviorSubject(this.toastData);

  showToast(message: string, style: string) {
    let data = {
      message: message,
      style: style
    };
    this.toastData = [data, ...this.toastData]
    this.toasts.next(this.toastData);
    setTimeout(() => {
      this.toastData.pop();
      this.toasts.next(this.toastData);
    }, 5000)
  }

  removeToast(index: number) {
    this.toastData.splice(index, 1);
    this.toasts.next(this.toastData);
  }

  getToast(): Observable<any[]> {

    return of(this.toastData);
  }

}
