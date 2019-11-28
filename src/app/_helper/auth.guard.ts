import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AccountService } from '@shared/_services/account.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '@shared/_components/login/login.component';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private accountService: AccountService,
    private modalService: NgbModal,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.accountService.checkLogin();
    if (currentUser) {
      return true;
    }

    this.modalService.open(LoginComponent);
    return false;
  }
}