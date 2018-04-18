import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  input: MenuItem;
  activeMenu = true;
  @Input() isAuth = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateMenu(menuItem: string) {
    if (menuItem === 'gh') {
      this.activeMenu = true;
      this.router.navigate(['engage']);
    } else if (menuItem === 'sm') {
      this.activeMenu = false;
      this.router.navigate(['engage/school-master']);
    } else if (menuItem === 'um') {
      this.activeMenu = false;
      this.router.navigate(['engage/user-master']);
    }
  }
}

