import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from '@shared/_services/account.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    private accountService: AccountService,
    private cookieService: CookieService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.accountService.requireToken) {
      const token = this.cookieService.get('token');
      if (token) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
      }
    }
    return next.handle(request);
  }
}
