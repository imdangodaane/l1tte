import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AccountService } from '@shared/_services/account.service';
import { ResetPWPayload } from 'src/app/_models/resetpw-payload';

@Component({
  selector: 'app-resetpw',
  templateUrl: './resetpw.component.html',
  styleUrls: ['./resetpw.component.scss']
})
export class ResetpwComponent implements OnInit {
  debug = true;
  @Output() eventState = new EventEmitter();
  emailResetPW = '';

  constructor(
    private accountService: AccountService,
  ) { }

  ngOnInit() {
  }

  onSubmitResetPW() {
    console.log('TCL: onSubmitResetPW -> this.emailResetPW', this.emailResetPW);
    const payload: ResetPWPayload = { email: this.emailResetPW };
    this.accountService.resetPW(payload).subscribe(
      res => {
        console.log('TCL: onSubmitResetPW -> res', res);
        this.eventHandler('close-modal');
      },
      err => {
        this.eventHandler('close-modal');
        if (this.debug === true) { console.error(err); }
      }
    );
  }

  eventHandler(type: string) {
    switch (type) {
      default:
        this.eventState.emit('close-modal');
        break;
    }
  }

}
