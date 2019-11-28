import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Post } from 'src/app/_models/post-payload';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewPostComponent implements OnInit {
  post: Post;
  innerValue: any = '';

  constructor() {
    this.post = new Post();
  }

  ngOnInit() {
    this.post.badges = {
      news: false,
      event: false,
      hot: false,
      guide: false,
      etc: false
    };
  }

  onSubmitNewPost() {
    this.post.content = this.innerValue;
    console.log("TCL: NewPostComponent -> onSubmitNewPost -> this.post", this.post)
  }

}
