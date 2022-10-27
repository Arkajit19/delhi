import { Component } from '@angular/core';
import {DatahubService} from './services/datahub.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'delhi';
  users: any ;
  constructor(private userdata: DatahubService) {
    
    console.warn(" user details : ", userdata.users());
    this.users = userdata.users();
  }
}
