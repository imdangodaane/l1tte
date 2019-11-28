import { Component, OnInit, Input } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AccountService } from '@shared/_services/account.service';
import { ResetPWPayload } from 'src/app/_models/resetpw-payload';

@Component({
  selector: 'app-resetpw',
  templateUrl: './resetpw.component.html',
  styleUrls: ['./resetpw.component.scss']
})
export class ResetpwComponent implements OnInit {
  debug = true;
  @Input() openingModal: NgbModalRef;
  emailResetPW = '';

  constructor(
    private accountService: AccountService,
  ) { }

  ngOnInit() {
  }

  closeModal() {
    try {
      this.openingModal.close();
    } catch (e) {}
  }

  onSubmitResetPW() {
    console.log("TCL: onSubmitResetPW -> this.emailResetPW", this.emailResetPW)
    const payload: ResetPWPayload = { email: this.emailResetPW };
    this.accountService.resetPW(payload).subscribe(
      res => {
        console.log("TCL: onSubmitResetPW -> res", res);
        this.closeModal();
      },
      err => {
        if (this.debug === true) console.error(err)
      }
    );
  }

}
