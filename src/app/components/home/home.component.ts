import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-home',
    imports: [CommonModule, MatCardModule, MatButtonModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  newsId: number[]= [];
  newsData: any[] = [];
  currentIndex: number = 0;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {

    this.apiService.getNews().subscribe(res => {
      for (let i = 0; i < res.length; i++) {
        this.newsId.push(res[i]) ;
      };
      this.loadNews();
    });
  }

  loadNews(): void {
    const get10Ids = this.newsId.slice(this.currentIndex, this.currentIndex + 10);
    get10Ids.forEach( id => {
        this.apiService.getNewsData(id).subscribe ( data => {
          this.newsData.push(data);
      });
    });
    this.currentIndex += 10;
    console.log(this.newsData)
  }
}
