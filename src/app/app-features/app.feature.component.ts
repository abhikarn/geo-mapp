import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent, LayoutComponent } from '@app/app-core';
@Component({
  selector: 'app-feature',
  templateUrl: './app.feature.component.html'
})
export class AppFeatureComponent implements OnInit {
  @ViewChild('layout') layout: LayoutComponent;
  componentData = null;
  constructor(private activeRoute: ActivatedRoute
  ) {
  }
  ngOnInit() {
    this.componentData = this.activeRoute.snapshot.data['layout'];
    this.componentData.component = HeaderComponent;
    this.componentData.isAuth = true;
  }

  updateLayout() {
    this.layout.createDynamicHeader(this.componentData);
  }
}

