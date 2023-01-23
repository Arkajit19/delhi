import { Component, OnInit } from '@angular/core';
import { DatahubService } from '../services/datahub.service';
import { UserdataService } from '../services/userdata.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  users: any;
  constructor(private userdata: UserdataService) {
    userdata.users().subscribe((data) => {
      console.warn('data', data);
      this.users = data;
    });
  }

  ngOnInit(): void {}
}
