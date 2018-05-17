import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppBaseComponent, WebService } from '@app/app-core';
import { School } from '@app/app-core';
import { SchoolMasterRouteConfig } from '../school-master-route-names';
import { Message } from 'primeng/components/common/api';
@Component({
  selector: 'app-school-master-list',
  templateUrl: './school-master-list.component.html',
  styleUrls: ['./school-master-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SchoolMasterListComponent extends AppBaseComponent implements OnInit {
  schoolMasterList: School[];
  schoolMasters: School[];
  data = false;
  sortF: string;
  pageinationcount = '';
  successMsg = false;
  msg: string;
  display = false;
  success: Message[] = [];
  currentPage = 0;
  sortFields = [
    { name: 'Sort By School Name', value: 'schoolName' },
    { name: 'Sort By State Name', value: 'stateName' },
    { name: 'Sort By Street', value: 'street' },
    { name: 'Sort By Area', value: 'area' },
    { name: 'Sort By LGA', value: 'lGA' }
  ];
  sortingModel = 'schoolName';
  constructor(public router: Router, public activeRoute: ActivatedRoute,
    public webService: WebService
  ) {
    super();
  }

  ngOnInit() {
    this.schoolMasters = this.activeRoute.snapshot.data.schoolLst || [];
    this.doSort(this.sortingModel);
  }

  addSchool() {
    this.router.navigateByUrl(`engage/school-master/${SchoolMasterRouteConfig.schoolMasterCreate.routeName}`);
  }

  editSchool(schoolMaster: School) {
    this.setState('schoolMaster', schoolMaster);
    this.router.navigateByUrl(`engage/school-master/${schoolMaster.id}/edit`);
  }

  updatePage(event) {
    this.currentPage = +event.page;
    this.schoolMasterList = this.schoolMasters.slice(event.first, +event.first + +event.rows);
  }
  doSort(event) {
    this.schoolMasters.sort((a, b) => {
      if (a[event] < b[event]) {
        return -1;
      }
      if (a[event] > b[event]) {
        return 1;
      }
      return 0;
    });
    this.schoolMasterList = this.schoolMasters.slice(0, 8);
    console.log(this.schoolMasters);
  }
}
