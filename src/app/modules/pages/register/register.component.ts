import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { AccountService } from 'src/app/shared/_services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  debug = true;
  registerPayload = {
    userid: '',
    user_pass: '',
    email: '',
    sex: '',
    birthdate: '',
  };
  reUserpass = '';
  sexSelection = [
    { name: 'Nam', value: 'M' },
    { name: 'Nữ', value: 'F'},
  ];
  policyAgreement = false;

  constructor(
    private toastrService: NbToastrService,
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    if (
      this.registerPayload.userid &&
      this.registerPayload.user_pass &&
      this.registerPayload.email &&
      this.registerPayload.sex &&
      this.registerPayload.birthdate
      ) {
        this.accountService.register(this.registerPayload).subscribe(
          res => {
            this.toastrService.success('Đăng ký tài khoản thành công', 'Đăng ký thành công');
            setTimeout(() => {
              this.router.navigate(['']);
            }, 1500);
          },
          err => {
            if (this.debug === true) { console.error(err); }
            if (err.error.status === 'existed') {
              this.toastrService.danger('Tên tài khoản hoặc email đã tồn tại', 'Đăng ký thất bại');
            } else {
              this.toastrService.danger('Lỗi không xác định, vui lòng liên hệ admin để xử lý', 'Đăng ký thất bại');
            }
          }
        );
      } else {
        this.toastrService.danger('Bạn chưa điền đầy đủ hoặc sai thông tin', 'Đăng ký thất bại');
      }
  }

}
