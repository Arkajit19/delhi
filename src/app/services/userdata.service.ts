import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http'
@Injectable({
  providedIn: 'root',
})
export class UserdataService {
  url = 'https://jsonplaceholder.typicode.com/posts/1/comments';
  constructor(private http: HttpClient) {}
  users() {
    return this.http.get(this.url);
  }
}
