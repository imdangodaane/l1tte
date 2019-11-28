import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/app/_configs/api.constant';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(
    private http: HttpClient
  ) {}

  getDownloadLinkFULL() {
    const url = API.API_GAME.API_DOWNLOAD_LINK_FULL;
    return this.http.get<any>(url);
  }

  getDownloadLinkPatcher() {
    const url = API.API_GAME.API_DOWNLOAD_LINK_PATCHER;
    return this.http.get<any>(url);
  }

  getServerInformation() {
    const url = API.API_GAME.API_GET_SERVER_INFORMATION;
    return this.http.get<any>(url);
  }
}
