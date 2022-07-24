import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Data } from '../models/data';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { 
    
  }

  fetchArticle(keyword:string,category:string,country:string,page:number,perpage:number): Observable<Data> {
    return this.http.get<Data>(environment.url + 'article?q='+keyword+'&category='+category+'&country='+country + '&page='+page+ '&perpage='+perpage);
  }
  fetchCountry(): Observable<any> {
    return this.http.get(environment.url + 'country');
  }
  fetchCategory(): Observable<any> {
    return this.http.get(environment.url + 'category');
  }
}
