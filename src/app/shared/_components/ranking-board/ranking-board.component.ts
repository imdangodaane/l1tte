import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ranking-board',
  templateUrl: './ranking-board.component.html',
  styleUrls: ['./ranking-board.component.scss']
})
export class RankingBoardComponent implements OnInit {
  @Input() name: string;
  @Input() data: any;
  rankingUsers = [
    { name: 'nquizx' },
    { name: 'nqui1' },
    { name: 'nqui2' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
