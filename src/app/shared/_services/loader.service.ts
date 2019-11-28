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
    login: false
  }
  loadRef$ = {
    loading: new BehaviorSubject<boolean>(false),
    login: new BehaviorSubject<boolean>(false)
  };

  constructor() {}

  initLoader() {
    for (let key in this.loadRef$) {
      this.loadRef$[key].asObservable().subscribe(res => this.loadRef[key] = res);
    }
  }

  showLoader(id = '') {
    if (id) {
      this.loadRef$[id].next(true);
    } else {
      this.loadRef$['loading'].next(true);
    }
  }

  hideLoader(id = '') {
    if (id) {
      this.loadRef$[id].next(false);
    } else {
      for (let i in this.loadRef$) {
        this.loadRef$[i].next(false);
      }
    }
  }
}
