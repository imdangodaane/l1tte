import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NbThemeModule } from '@nebular/theme';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import("./modules/pages/pages.module").then(m => m.PagesModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NbThemeModule.forRoot(),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
