import { OnInit, Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService, ErrorsService, StorageService } from './services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private ngUnsubscribe = new Subject();
  private routerSubscription: any;
  title = 'sparkweb';

  constructor(
    private _cookieService: CookieService,
    private _errorsService: ErrorsService,
    private _storageService: StorageService,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
 
    const itemsStored = ['token', 'userDetails'];
    
    window.addEventListener('storage', function () {
    
      Object.values(localStorage).forEach(item => {
      
        let storageItem = Object.keys(JSON.parse(item));
        
        for (let i = 0; i < storageItem.length; i++) {
          if (itemsStored.indexOf(storageItem[i]) > -1) {
           
            continue;
          } else {
            localStorage.clear();
            window.location.href = `${window.location.protocol}//${window.location.host}/signin`;
            break;
          }
        }
      });
    });

    if (
      this._cookieService.get('rememberMe') ||
      localStorage.getItem('rememberMe')
    ) {
      this.refreshToken();
    }
  }

  private refreshToken() {
    const tokenItems =
      JSON.parse(this._storageService.getItem('token') || '{}') || null;

    if (
      (tokenItems !== undefined && tokenItems !== null) ||
      tokenItems !== {}
    ) {
      if (Date.now() > tokenItems.refreshTokenTime) {
        let params = {
          token: tokenItems.token,
          refresh_token: tokenItems.tokenRefresh,
        };

        this._authService.refreshToken(params);
      }
    }
  }

  private initializeErrors() {
    this._errorsService
      .getErrors()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(errors => {
        console.log('STATUS ERRORS: Show through the modal service', errors);

        //TODO -> Create the modal Service
        // const modalRef = this._modalService.open(PromptComponent);

        // modalRef.componentInstance.message = errors.toString();
        // modalRef.componentInstance.button = 'Confirm';
        // modalRef.componentInstance.title = 'STATUS ERROR';
      });
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
