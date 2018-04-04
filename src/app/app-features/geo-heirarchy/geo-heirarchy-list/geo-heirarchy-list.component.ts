import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppBaseComponent } from '@app/app-core';
import { GeoMapping } from '@app/app-core';
import { GeoHeirarchyRouteConfig } from '../geo-heirarchy-route-names';
import { Message } from 'primeng/components/common/api';
@Component({
  selector: 'app-geo-heirarchy-list',
  templateUrl: './geo-heirarchy-list.component.html',
  styleUrls: ['./geo-heirarchy-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GeoHeirarchyComponent extends AppBaseComponent implements OnInit {
  geoMapList: GeoMapping[];
  data = false;
  sortF: string;
  pageinationcount = '';
  successMsg = false;
  msg: string;
  display = false;
  success: Message[] = [];
  currentPage = 0;
  constructor(private router: Router, public activeRoute: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.geoMapList = this.activeRoute.snapshot.data.geoMapp.slice(0, 8);
  }

  addGeoMapping() {
    this.router.navigateByUrl(`geo-heirarchy/${GeoHeirarchyRouteConfig.geoheirarchyCreate.routeName}`);
  }

  editGeoMapping(geo: GeoMapping) {
    this.setState('geoMap', geo)
    this.router.navigateByUrl(`geo-heirarchy/${geo.geoMappingId}/edit`);
  }

  updatePage(event) {
    this.currentPage = +event.page;
    this.geoMapList = this.activeRoute.snapshot.data.geoMapp.slice(event.first, +event.first + +event.rows);
  }
}
