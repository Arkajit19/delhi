import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatahubService {

  constructor() { }
  users() {
    return [
      { name: 'rajat', age: 26, email: 'rajat@gmail.com' },
      { name: 'aman', age: 36, email: 'aman@gmail.com' },
      { name: 'bikash', age: 22, email: 'bikash@gmail.com' },
      { name: 'rahul', age: 29, email: 'rahul@gmail.com' },
    ];
  }
}
