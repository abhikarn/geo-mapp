import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { AuthService } from 'app/app-core/services/auth-service/auth.service';
import { AppBaseComponent } from 'app/app-core/base/app-core-base-component';
import { GeoHeirarchyRouteConfig } from 'app/app-features/geo-heirarchy/geo-heirarchy-route-names';
import { UserMaster } from '@app/app-core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends AppBaseComponent implements OnInit {
  input: MenuItem;
  activeMenu = true;
  @Input() isAuth = false;
  userModel: UserMaster = this.getState<UserMaster>('usermodel');
  constructor(private router: Router, private authService: AuthService) {
    super();
    console.log(this.userModel, 'sumit');
  }

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

  addGeoMapping() {
    this.router.navigateByUrl(`engage/geo-heirarchy/${GeoHeirarchyRouteConfig.geoheirarchyCreate.routeName}`);
  }

  logout() {
    this.authService.isAuth = false;
    this.clearState('authtoken');
    this.router.navigate(['login']);
  }
}

