import { Injectable } from '@angular/core';
import { API } from 'src/app/_configs/api.constant';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from 'src/app/_models/article';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private http: HttpClient
  ) {}

  createArticle(payload: Article) {
    const url = API.API_ARTICLE.API_ARTICLE;
    return this.http.post<any>(url, payload, httpOptions);
  }
}
