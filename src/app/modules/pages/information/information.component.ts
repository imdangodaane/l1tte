import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/shared/_services/loader.service';
import { GameService } from 'src/app/shared/_services/game.service';
import { ServerInformation } from 'src/app/_models/server-information';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  debug = true;
  serverInformation: ServerInformation

  constructor(
    public loaderService: LoaderService,
    private gameService: GameService
  ) { }

  ngOnInit() {
    // this.loaderService.initLoader();
    this.getServerInformation();
  }

  getServerInformation() {
    this.gameService.getServerInformation().subscribe(
      res => {
        console.log(res);
        this.serverInformation = res;
      },
      err => {
        if (this.debug === true) {
          console.error(err);
        }
      }
    );
  }

}
