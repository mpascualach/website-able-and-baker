import { Component, OnInit } from '@angular/core';
import { news } from '../news/news'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentNews: any = news;
  latestNews: object;

  constructor() { 
    this.latestNews = this.currentNews[0]
    console.log(this.latestNews)
  }

  ngOnInit() {
    
  }

}
