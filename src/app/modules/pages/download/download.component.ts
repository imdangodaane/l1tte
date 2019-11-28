import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/shared/_services/game.service';
import { LoaderService } from 'src/app/shared/_services/loader.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {
  debug = true;
  linkGameFull = '';
  linkGamePatcher = '';

  constructor(
    private gameService: GameService,
    public loaderService: LoaderService
  ) { }

  ngOnInit() {
    this.getDownloadLinkFull();
    this.getDownloadLinkPatcher();
  }

  getDownloadLinkFull() {
    this.loaderService.showLoader();
    this.gameService.getDownloadLinkFULL().subscribe(
      res => {
        this.loaderService.hideLoader();
        this.linkGameFull = res.data;
      },
      err => {
        this.loaderService.hideLoader();
        if (this.debug === true) {
          console.error(err);
        }
      }
    );
  }

  getDownloadLinkPatcher() {
    this.loaderService.showLoader();
    this.gameService.getDownloadLinkPatcher().subscribe(
      res => {
        this.loaderService.hideLoader();
        this.linkGamePatcher = res.data;
      },
      err => {
        this.loaderService.hideLoader();
        if (this.debug === true) {
          console.error(err);
        }
      }
    );
  }

}
