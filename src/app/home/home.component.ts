import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'article-fe';
  data: any = [];  
  country:any = [];
  category:any = [];
  keyword:string = "";
  page:number = 0;
  last:number = 0;
  total:number = 0;
  limit:number = environment.pagination;
  queryString : string ="";
  queryCountry : string ="";
  queryCategory : string ="";
  constructor(private articleservice:ArticleService){

  }

  ngOnInit() {  
    this.articleservice.fetchCountry().subscribe(
    res =>{
      this.country = res
    })
    this.articleservice.fetchCategory().subscribe(
    res =>{
      this.category = res
    })
    this.fetchData()
  }
  searchData(){
    this.page =  1;
    this.last = 0;
    this.fetchData()
  }
  
  loadMore(){
    this.page = this.page + 1;
    this.articleservice.fetchArticle(this.queryString,this.queryCategory,this.queryCountry,this.page,this.limit).subscribe(
      res =>{
        if(res){
          res.data.forEach(obj => {
              this.data.push(obj)
          });
          this.page = res.page;
          this.last =  res.last_page;
           this.total =  res.total;
        }
      
      }
    )
  }
  fetchData(){

    this.articleservice.fetchArticle(this.queryString,this.queryCategory,this.queryCountry,this.page,this.limit).subscribe(
      res =>{
        this.data = res.data
        this.page = res.page;
        this.last =  res.last_page;
        this.total =  res.total;
      }
    )
  }
}
