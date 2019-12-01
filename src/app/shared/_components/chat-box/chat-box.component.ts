import { Component, OnInit, OnDestroy } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import { AccountService } from '@shared/_services/account.service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit, OnDestroy {
  debug = true;
  messages: any[] = [];
  selfSentFlag = false;
  webSocketSubject: any;

  constructor(
    private accountService: AccountService,
  ) { }

  ngOnInit() {
    this.accountService.checkLogin();
    if (this.accountService.isLogin) {
      this.initialWebSocketConnection();
    }
  }

  initialWebSocketConnection() {
    this.webSocketSubject = webSocket('ws://localhost:8000/ws/chat/latte-chat-room');
    this.webSocketSubject.subscribe(
      msg => {
        if (!this.selfSentFlag) {
          this.messages.push({
            user: {
              name: 'Anonymous',
              avatar: '',
            },
            files: [],
            text: msg.message,
            date: new Date(),
            reply: true,
            type: 'text',
          });
        }
        this.selfSentFlag = false;
      },
      err => { if (this.debug === true) { console.error(err); } }
    );
  }

  sendMessage(event: any, userName: string, avatar: string, reply: boolean) {
    const files = !event.files ? [] : event.files.map((file) => {
      return {
        url: file.src,
        type: file.type,
        icon: 'file-text-outline',
      };
    });
    this.messages.push({
      text: event.message,
      date: new Date(),
      reply,
      type: files.length ? 'file' : 'text',
      files,
      user: {
        name: userName,
        avatar: '',
      },
    });
    console.log('TCL: ChatBoxComponent -> sendMessage -> this.messages', this.messages);
    // * SENT MESSAGE TO SERVER
    this.webSocketSubject.next({
      message: event.message
    });
    this.selfSentFlag = true;
  }

  ngOnDestroy() {
    this.webSocketSubject.complete();
  }

}
