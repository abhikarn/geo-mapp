import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent, LayoutComponent } from '@app/app-core';
@Component({
  selector: 'app-feature',
  templateUrl: './app.feature.component.html'
})
export class AppFeatureComponent implements OnInit {
  @ViewChild('layout') layout: LayoutComponent;
  componentData = null;
  constructor(private activeRoute: ActivatedRoute, private router: Router) {
  }
  ngOnInit() {
    this.componentData = this.activeRoute.snapshot.data['layout'];
    this.componentData.component = HeaderComponent;
    if (this.router.url.endsWith('reset-password')) {
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

