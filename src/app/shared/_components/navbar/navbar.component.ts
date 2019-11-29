import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { LoaderService } from '../../_services/loader.service';
import { NbMenuService } from '@nebular/theme';
import { AccountService } from '@shared/_services/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  debug = true;
  @ViewChild('resetPasswordModal', {static: false}) resetPasswordModal: ElementRef;
  user: string;
  openingModal: NgbModalRef;
  headers = [
    { name: 'Đăng ký', url: 'register'},
    { name: 'Tải game', url: 'download'},
    { name: 'Thông tin', url: 'information'},
    { name: 'Hỗ trợ', url: 'support'},
    { name: 'Tin tức', url: 'news'},
    { name: 'Diễn đàn', url: 'forum'},
    { name: 'Wiki', url: 'wiki'},
  ];
  userModel = {
    name: 'nquizx',
    title: 'Administrator'
  };
  userMenu = [
    { title: 'Trang cá nhân', data: {id: 'personal-page'} },
    { title: 'Thông tin tài khoản', data: {id: 'account-info'} },
    { title: 'Đăng bài viết', data: {id: 'new-post'} },
    { title: 'Đăng xuất', data: {id: 'logout'} },
  ];

  constructor(
    private route: Router,
    private modalService: NgbModal,
    public loaderService: LoaderService,
    private nbMenuService: NbMenuService,
    private accountService: AccountService,
  ) {}

  ngOnInit() {
    this.loaderService.initLoader();
    this.userMenuContextListener();
    this.getCurrentUser();
  }

  ngAfterViewInit() {
  }

  getCurrentUser() {
    this.accountService.getCurrentUser().subscribe(
      res => {
        this.user = res;
      },
      err => {
        if (this.debug === true) { console.error(err); }
      }
    );
  }

  navigateTo(url) {
    this.route.navigate([url]);
  }

  openModal(content) {
    this.closeModal();
    this.openingModal = this.modalService.open(content);
  }

  closeModal() {
    try {
      this.openingModal.close();
    } catch (e) {
      this.modalService.dismissAll();
    }
  }

  onLogout() {
    this.accountService.logout();
  }

  userMenuContextListener() {
    this.nbMenuService.onItemClick().subscribe(event => {
      switch (event.item.data.id) {
        case 'logout':
          this.onLogout();
          break;
        default:
          this.navigateTo(event.item.data.id);
          break;
      }
    });
  }

  loginHandler(event: any) {
    if (event === 'login-success') {
      this.closeModal();
    }
  }

  eventHandler(event: string) {
    switch (event) {
      case 'close-modal':
        this.closeModal();
        break;
      case 'login-success':
        this.closeModal();
        break;
      case 'open-reset-password':
        this.closeModal();
        this.openingModal = this.modalService.open(this.resetPasswordModal);
    }
  }

}
