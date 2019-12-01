import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/_services/data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  debug = true;
  posts = [];
  userRankingData = {
    name: 'Bảng xếp hạng (cấp độ)',
    data: [
      { name: 'nquizx' },
      { name: 'nqui1' },
      { name: 'nqui2' },
    ]
  };

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.getDataFromFile('assets/data/news.json');
  }

  getDataFromFile(url) {
    this.dataService.getDataFromFile(url).subscribe(
      res => {
        this.posts = res;
      },
      err => {
        if (this.debug === true) {
          console.error(err);
        }
      }
    );
  }
}
