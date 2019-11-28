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
} from '@nebular/theme';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResetpwComponent } from './resetpw/resetpw.component';


@NgModule({
  declarations: [
    NavbarComponent,
    PostComponent,
    LoginComponent,
    ResetpwComponent,
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
    RouterModule
  ],
  exports: [
    NavbarComponent,
    PostComponent,
    LoginComponent,
    ResetpwComponent,
  ]
})
export class SharedComponentsModule { }
