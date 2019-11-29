import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoaderService } from '@shared/_services/loader.service';
import { LoginPayload } from 'src/app/_models/login-payload';
import { AccountService } from '@shared/_services/account.service';
import { CookieService } from 'ngx-cookie-service';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [CookieService]
})
export class LoginComponent implements OnInit {
  debug = true;
  @Output() eventState = new EventEmitter();

  loginPayload: LoginPayload = {
    userid: '',
    user_pass: ''
  };

  constructor(
    public loaderService: LoaderService,
    private accountService: AccountService,
  ) { }

  ngOnInit() { }

  onLogin() {
    this.loaderService.showLoader('login');
    this.accountService.login(this.loginPayload)
    .pipe(
      map(res => {
        this.loaderService.hideLoader();
        this.accountService.loginSuccessHandler(res.data);
        this.eventHandler('login-success');
      }),
      catchError(err => {
        this.loaderService.hideLoader();
        if (this.debug === true) {
          console.error(err);
        }
        return of([]);
      })
    )
    .subscribe();
  }

  eventHandler(type: string) {
    switch (type) {
      case 'open-reset-password':
        this.eventState.emit('open-reset-password');
        break;
      case 'login-success':
        this.eventState.emit('login-success');
        break;
      default:
        this.eventState.emit('close-modal');
        break;
    }
  }
}
