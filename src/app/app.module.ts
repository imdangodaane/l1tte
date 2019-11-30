import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './modules/pages/pages.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbDatepickerModule,
  NbToastrModule,
  NbMenuModule,
  NbCardModule,
  NbSidebarModule
} from '@nebular/theme';
import { NbMomentDateModule } from '@nebular/moment';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { SharedComponentsModule } from './shared/_components/shared-components.module';
import { CKEditorModule } from 'ngx-ckeditor';
import { JwtModule } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';
import { JwtInterceptor } from './_helper/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    NgbModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    SharedComponentsModule,
    NbDatepickerModule.forRoot(),
    HttpClientModule,
    NbToastrModule.forRoot(),
    NbMenuModule.forRoot(),
    CKEditorModule,
    NbMomentDateModule,
    NbCardModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return null;
        },
      }
    }),
    NbSidebarModule.forRoot(),
  ],
  providers: [
    CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
