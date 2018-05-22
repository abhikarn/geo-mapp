import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent, LayoutComponent } from '@app/app-core';
@Component({
  selector: 'app-feature',
  templateUrl: './app.feature.component.html'
})
export class AppFeatureComponent implements OnInit, AfterViewInit {
  @ViewChild('layout') layout: LayoutComponent;
  componentData = null;
  constructor(private activeRoute: ActivatedRoute, private router: Router) {
  }
  ngOnInit() {
    this.componentData = this.activeRoute.snapshot.data['layout'];
    this.componentData.component = HeaderComponent;
    if (this.router.url.endsWith('reset-password')) {
      this.componentData.isAuth = false;
    } else {
      this.componentData.isAuth = true;
    }
  }

  ngAfterViewInit() {
    console.log('this.router.url');
    // if()
    console.log(this.router.url);
  }

  updateLayout(isAuth: boolean) {
    this.componentData.isAuth = isAuth;
    this.layout.createDynamicHeader(this.componentData);
  }
}

