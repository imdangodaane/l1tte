import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import { AccountService } from '@shared/_services/account.service';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChatBoxComponent implements OnInit, OnDestroy {
  debug = true;
  messages: any[] = [];
  selfSentFlag = false;
  webSocketSubject: any;
  accountInfo: any;

  constructor(
    private accountService: AccountService,
  ) { }

  ngOnInit() {
    this.chatBoxInitialization();
  }

  chatBoxInitialization() {
    if (this.accountService.isLogin) {
      this.getAccountInformation();
      this.initialWebSocketConnection();
    } else {
      this.accountService.loginEvent.pipe(
        map((res: string) => {
          if (res === 'login-success') {
            this.getAccountInformation();
            return res;
          }
        }),
        map((res: string) => {
          if (res === 'login-success') {
            this.initialWebSocketConnection();
          }
        }),
        catchError(err => {
          return of([]);
        })
      ).subscribe();
    }
  }

  initialWebSocketConnection() {
    this.webSocketSubject = webSocket('ws://139.59.216.187:8000/ws/chat/latte');
    this.webSocketSubject.subscribe(
      (msg: any) => {
        if (msg.status === 'connected') {
          this.loadMessages(msg.messages);
        } else {
          if (!this.selfSentFlag) {
            this.messages.push({
              user: {
                name: msg.user,
                avatar: msg.avatar
              },
              text: msg.text,
              type: msg.message_type,
              date: new Date(msg.created_at),
              reply: true,
              files: [],
            });
          }
          this.selfSentFlag = false;
        }
      },
      err => { if (this.debug === true) { console.error(err); } }
    );
  }

  sendMessage(event: any, userName: string) {
    const files = !event.files ? [] : event.files.map((file: { src: any; type: any; }) => {
      return {
        url: file.src,
        type: file.type,
        icon: 'file-text-outline',
      };
    });
    const message = {
      text: event.message,
      date: new Date(),
      reply: false,
      type: files.length ? 'file' : 'text',
      files,
      user: {
        name: userName,
        avatar: '',
      },
    };
    this.messages.push(message);

    // * SENT MESSAGE TO SERVER
    this.webSocketSubject.next(message);
    this.selfSentFlag = true;
  }

  getAccountInformation() {
    this.accountService.getAccountInformation().pipe(
      map(res => {
        this.accountInfo = res.data;
      }),
      catchError(err => {
        if (this.debug === true) { console.error(err); }
        this.accountService.logout();
        return of([]);
      })
    ).subscribe();
  }

  loadMessages(messages: string) {
    const parsedMessages: Array<any> = JSON.parse(messages);
    this.messages = parsedMessages.map(msg => {
      console.log(msg);
      return {
        user: {
          name: msg.fields.user,
          avatar: msg.fields.avatar
        },
        text: msg.fields.text,
        type: msg.fields.message_type,
        date: new Date(msg.fields.created_at),
        reply: this.accountInfo ? (this.accountInfo.userid === msg.fields.user ? false : true) : true,
        files: [],
      };
    });
  }

  ngOnDestroy() {
    this.webSocketSubject.complete();
  }

}
