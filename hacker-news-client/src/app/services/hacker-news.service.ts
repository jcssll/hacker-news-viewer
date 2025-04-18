import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {

  private apiUrl = 'http://localhost:5000/api/stories/top';

  constructor(private http: HttpClient) { }

  getTopStories(): Observable<any>{
    return this.http.get(this.apiUrl)
  }
}
