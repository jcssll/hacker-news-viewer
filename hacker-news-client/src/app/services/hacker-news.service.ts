import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {

 private baseUrl = environment.apiUrl; 

  constructor(private http: HttpClient) { }

  getStories(type: 'top' | 'new' | 'best', page: number = 1, pageSize: number = 10, searchTerm: string=''): Observable<any>{
    let params = new HttpParams()
    .set('page', page.toString())
    .set('pageSize', pageSize.toString());

    if(searchTerm){
      params = params.set('searchTerm', searchTerm);
    }
    return this.http.get(`${this.baseUrl}/${type}`, {params});
  }

  getStoryById(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

}
