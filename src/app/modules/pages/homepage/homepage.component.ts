import { Component, OnInit, Directive, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomepageComponent implements OnInit {
  showHomepageNotice = true;

  constructor() { }

  ngOnInit() {
  }

  closeNotice() {
    this.showHomepageNotice = false;
  }

}
