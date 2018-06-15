import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent, LayoutComponent, UserMaster, AppBaseComponent } from '@app/app-core';
@Component({
  selector: 'app-feature',
  templateUrl: './app.feature.component.html'
})
export class AppFeatureComponent extends AppBaseComponent implements OnInit {
  @ViewChild('layout') layout: LayoutComponent;
  componentData = null;
  constructor(private activeRoute: ActivatedRoute, public router: Router) {
    super();
  }
  ngOnInit() {
    this.componentData = this.activeRoute.snapshot.data['layout'];
    this.componentData.component = HeaderComponent;
    const isFirstTimeLogin =  this.getState<UserMaster>('usermodel').notFirstLogin;
    if (!isFirstTimeLogin) {
      this.componentData.menuConfig.showMenu = false;
    } else {
      this.componentData.menuConfig.showMenu = true;
    }
  }

  updateLayout(isAuth: boolean) {
    this.componentData.menuConfig.showMenu = isAuth;
    this.layout.createDynamicHeader(this.componentData);
  }
}

