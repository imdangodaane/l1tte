import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnChanges {
  @Input() post: any;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.post) {
      // console.log(this.post);
    }
  }

}
