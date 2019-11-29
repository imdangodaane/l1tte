import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterAccount } from 'src/app/_models/register-account';
import { API } from 'src/app/_configs/api.constant';
import { LoginPayload } from 'src/app/_models/login-payload';
import { ResetPWPayload } from 'src/app/_models/resetpw-payload';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  currentUser: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private jwtService: JwtHelperService
  ) {}

  register(payload: RegisterAccount) {
    const url = API.API_ACCOUNT.API_ACCOUNT_REGISTER;
    return this.http.post<any>(url, payload, httpOptions);
  }

  login(payload: LoginPayload) {
    const url = API.API_ACCOUNT.API_ACCOUNT_LOGIN;
    return this.http.post<any>(url, payload, httpOptions);
  }

  resetPW(payload: ResetPWPayload) {
    const url = API.API_ACCOUNT.API_ACCOUNT_RESETPW;
    return this.http.post<any>(url, payload, httpOptions);
  }

  checkLogin() {
    this.currentUser.next(this.cookieService.get('token'));
    return this.cookieService.get('token');
  }

  logout() {
    this.cookieService.delete('token');
    this.currentUser.next(null);
  }

  getCurrentUser() {
    return this.currentUser.asObservable();
  }

  loginSuccessHandler(token: string) {
    const decodedPayload = this.jwtService.decodeToken(token);
    this.cookieService.set('token', token, new Date(decodedPayload.exp_iso));
    this.currentUser.next(this.cookieService.get('token'));
  }
}
