import { Component } from '@angular/core';
import { DatahubService } from './services/datahub.service'
import {UserdataService} from './services/userdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'delhi';
  users: any;
  constructor(private userdata: UserdataService) {
    // console.warn(" user details : ", userdata.users());
    // this.users = userdata.users();
    userdata.users().subscribe((data) => {
      console.warn('data', data);
      this.users = data;
    }
      
    );
    
  }
}
