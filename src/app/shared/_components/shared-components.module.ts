import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import {
  NbCardModule,
  NbListModule,
  NbInputModule,
  NbButtonModule,
  NbUserModule,
  NbContextMenuModule,
  NbSpinnerModule,
  NbChatModule,
  NbAccordionModule,
} from '@nebular/theme';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResetpwComponent } from './resetpw/resetpw.component';
import { RankingBoardComponent } from './ranking-board/ranking-board.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';


@NgModule({
  declarations: [
    NavbarComponent,
    PostComponent,
    LoginComponent,
    ResetpwComponent,
    RankingBoardComponent,
    ChatBoxComponent,
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbListModule,
    NgbModalModule,
    FormsModule,
    NbInputModule,
    NbButtonModule,
    NbUserModule,
    NbContextMenuModule,
    NbSpinnerModule,
    RouterModule,
    NbListModule,
    NbChatModule,
    NbAccordionModule
  ],
  exports: [
    NavbarComponent,
    PostComponent,
    LoginComponent,
    ResetpwComponent,
    RankingBoardComponent,
    ChatBoxComponent
  ]
})
export class SharedComponentsModule { }
