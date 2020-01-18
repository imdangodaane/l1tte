import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/_models/article';
import { ArticleService } from '@shared/_services/article.service';
import * as _ from 'lodash';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AccountInformation } from 'src/app/_models/account-information';
import { AccountService } from '@shared/_services/account.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {
  article: Article;
  accountInfo: AccountInformation;
  innerValue = '';

  constructor(
    private articleService: ArticleService,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    this.article = {
      title: '',
      content: '',
      slug: '',
      badges: {
        news: false,
        event: false,
        hot: false,
        guide: false,
        etc: false
      },
      author: '',
      created_at: '',
      updated_at: '',
      is_archived: false,
      banner_url: '',
      on_carousel: false,
    };
    this.getAccountInformation();
  }

  onSubmitNewArticle() {
    this.article.content = this.innerValue;
    const payload = _.cloneDeep(this.article);
    payload.author = this.accountInfo.userid;
    payload.badges = JSON.stringify(payload.badges);
    this.articleService.createArticle(payload).pipe(
      map(res => {
        console.log('===> : ---------------------------------------------------------------');
        console.log('===> : CreateArticleComponent -> onSubmitNewArticle -> res', res);
        console.log('===> : ---------------------------------------------------------------');
      }),
      catchError(e => { console.error(e); return of([]); })
    ).subscribe();
  }

  getAccountInformation() {
    this.accountService.getAccountInformation()
    .pipe(
      map(res => {
        this.accountInfo = res.data;
      }),
      catchError(e => { console.error(e); return of([]); })
    )
    .subscribe();
  }
}
