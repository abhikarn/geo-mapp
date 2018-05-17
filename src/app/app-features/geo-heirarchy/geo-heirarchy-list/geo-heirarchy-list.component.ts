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
export class GeoHeirarchyListComponent extends AppBaseComponent implements OnInit {
  geoMapList: GeoMapping[];
  geoMapps: GeoMapping[];
  data = false;
  sortF: string;
  pageinationcount = '';
  successMsg = false;
  msg: string;
  display = false;
  success: Message[] = [];
  currentPage = 0;
  sortFields = [
    { name: 'Sort By State Name', value: 'stateName' },
    { name: 'Sort By Branch Name', value: 'branchName' },
    { name: 'Sort By Zone Name', value: 'zoneName' },
    { name: 'Sort By MarketingHierarchyUser', value: 'marketingHierarchyUser' },
    { name: 'Sort By Supervisor', value: 'supervisorName' }
  ];
  sortingModel = 'marketingHierarchyUser';
  constructor(public router: Router, public activeRoute: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.geoMapps = this.activeRoute.snapshot.data.geoMapp;
    this.doSort(this.sortingModel);
    console.log(this.activeRoute.snapshot.data.geoMapp);
  }

  addGeoMapping() {
    this.router.navigateByUrl(`engage/geo-heirarchy/${GeoHeirarchyRouteConfig.geoheirarchyCreate.routeName}`);
  }

  editGeoMapping(geo: GeoMapping) {
    this.setState('geoMap', geo);
    this.router.navigateByUrl(`engage/geo-heirarchy/${geo.id}/edit`);
  }

  updatePage(event) {
    this.currentPage = +event.page;
    this.geoMapList = this.geoMapps.slice(event.first, +event.first + +event.rows);
  }
  doSort(event) {
    this.geoMapps.sort((a, b) => {
      if (a[event] < b[event]) {
        return -1;
      }
      if (a[event] > b[event]) {
        return 1;
      }
      return 0;
    });
    this.geoMapList = this.geoMapps.slice(0, 8);
    console.log(this.geoMapps);
  }
}
