import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  debug = true;
  loading$ = new BehaviorSubject<boolean>(false);
  loading = false;
  loginLoading$ = new BehaviorSubject<boolean>(false);
  loginLoading = false;
  loadRef = {
    loading: false,
    login: false,
    navbar: false
  };
  loadRef$ = {
    loading: new BehaviorSubject<boolean>(false),
    login: new BehaviorSubject<boolean>(false),
    navbar: new BehaviorSubject<boolean>(false),
  };

  constructor() {}

  initLoader() {
    for (const key in this.loadRef$) {
      if (key) { this.loadRef$[key].asObservable().subscribe(res => this.loadRef[key] = res); }
    }
  }

  showLoader(id = '') {
    if (id) {
      this.loadRef$[id].next(true);
    } else {
      this.loadRef$.loading.next(true);
    }
  }

  hideLoader(id = '') {
    if (id) {
      this.loadRef$[id].next(false);
    } else {
      for (const i in this.loadRef$) {
        if (i) { this.loadRef$[i].next(false); }
      }
    }
  }
}
