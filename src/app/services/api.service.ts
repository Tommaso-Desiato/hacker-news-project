import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://hacker-news.firebaseio.com/v0/';

  constructor(private http: HttpClient) { }

  getNews(): Observable<number[]> {
    return this.http.get<any>(`${this.baseUrl}newstories.json`)
  }

  getNewsData(newsId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}item/${newsId}.json`)
  }
}
