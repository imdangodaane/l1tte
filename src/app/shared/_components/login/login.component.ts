import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoaderService } from '@shared/_services/loader.service';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginPayload } from 'src/app/_models/login-payload';
import { AccountService } from '@shared/_services/account.service';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
    CookieService,
  ]
})
export class LoginComponent implements OnInit {
  debug = true;
  @Input() openingModal: NgbModalRef;
  @Output() loginState = new EventEmitter();

  loginPayload: LoginPayload = {
    userid: '',
    user_pass: ''
  };

  constructor(
    public loaderService: LoaderService,
    public modalService: NgbModal,
    private accountService: AccountService,
    private cookieService: CookieService,
    private jwtService: JwtHelperService,
  ) {}

  ngOnInit() {
  }

  openModal(content) {
    this.closeModal();
    this.openingModal = this.modalService.open(content);
  }

  closeModal() {
    try {
      this.openingModal.close();
    } catch (e) { this.modalService.dismissAll() }
  }

  onLogin() {
    this.loaderService.showLoader('login');
    this.accountService.login(this.loginPayload).subscribe(
      res => {
        this.loaderService.hideLoader();
        const decodedPayload = this.jwtService.decodeToken(res.data);
        this.cookieService.set('token', res.data, new Date(decodedPayload.exp));
        this.accountService.onLoginSuccess();
        this.loginState.emit('logged-in');
        this.closeModal();
      },
      err => {
        this.loaderService.hideLoader();
        if (this.debug === true) console.error(err);
      }
    );
  }

}
