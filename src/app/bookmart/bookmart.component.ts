import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmart',
  templateUrl: './bookmart.component.html',
  styleUrls: ['./bookmart.component.css']
})
export class BookmartComponent implements OnInit {
  data:any
  constructor() { }

  ngOnInit(): void {
    this.data = localStorage.getItem('saved');
    this.data = JSON.parse(this.data)
  }

}
