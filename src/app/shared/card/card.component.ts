import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  articles!: Article;

  constructor () { }

  ngOnInit(): void {
  }
  
  addNewItem(article:any){
    var persons = JSON.parse(localStorage.getItem("saved") || "[]");
    persons.push(article);
    localStorage.setItem("saved", JSON.stringify(persons));
    alert("saved")
   
  }


}
