import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/_models/article';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {
  article: Article;
  innerValue: any = '';

  constructor() {
    this.article = new Article();
  }

  ngOnInit() {
    this.article.badges = {
      news: false,
      event: false,
      hot: false,
      guide: false,
      etc: false
    };
  }

  onSubmitNewArticle() {
    this.article.content = this.innerValue;
    console.log("TCL: NewarticleComponent -> onSubmitNewarticle -> this.article", this.article)
  }
}
