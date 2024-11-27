import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  newsId: number[]= [];
  newsData: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getNews().subscribe(res => {
      for (let i = 0; i < res.length; i++) {
        this.newsId.push(res[i]) ;
      };

      const first10Ids = this.newsId.slice(0, 10);
      first10Ids.forEach( id => {
        this.apiService.getNewsData(id).subscribe ( data => {
          this.newsData.push(data);
        })
      })
    });
  }
}
