import { Component, OnInit } from '@angular/core';
import { DatahubService } from '../services/datahub.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  users: any;
  constructor(private userdata: DatahubService) {
    console.warn(' user details : ', userdata.users());
    this.users = userdata.users();
  }

  ngOnInit(): void {}
}
