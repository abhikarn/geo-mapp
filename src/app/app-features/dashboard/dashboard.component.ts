import { Component, OnInit } from '@angular/core';
import { AppBaseComponent } from '@app/app-core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends AppBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }
}

