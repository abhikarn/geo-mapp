import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppBaseComponent, GeoMapping, WebService, UserMaster } from '@app/app-core';
import { ConfirmationService } from 'primeng/primeng';

@Component({
  selector: 'app-map-geo-heirarchy',
  templateUrl: './geo-heirarchy-mapping.component.html',
  styleUrls: ['./geo-heirarchy-mapping.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GeoHeirarchyMapComponent extends AppBaseComponent implements OnInit {
  segmentLabelText = '';
  segmentButtonText = '';
  editMode = false;
  masters: any;
  supervisorModels: UserMaster[];
  hierarchyUserModels: UserMaster[];
  geoMapping: GeoMapping = {
    countryId: 1, countryName: '', zoneId: 1, zoneName: '',
    branchId: 1, branchName: '', stateId: 1, stateName: '',
    supervisorId: 1, supervisorName: '',
    marketingHierarchyUserId: 1, marketingHierarchyUserName: ''
  };
  constructor(private activatedRoute: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private router: Router, private webService: WebService
  ) {
    super();
    this.masters = this.activatedRoute.parent.snapshot.data.masters;
    console.log(this.masters);

  }

  ngOnInit() {
    this.editMode = !!this.activatedRoute.snapshot.params.id;
    if (this.editMode) {
      console.log(this.activatedRoute.snapshot.data.geoMap, 'Amit');
      this.geoMapping = this.activatedRoute.snapshot.data.geoMap;
      this.supervisorModels = this.activatedRoute.snapshot.data.SupervisorLst;
      this.hierarchyUserModels = this.activatedRoute.snapshot.data.HierarchyLst;
      this.segmentLabelText = 'Update Geo Heirarchy';
      this.segmentButtonText = 'Reset';
    } else {
      this.segmentLabelText = 'Create Geo Heirarchy';
      this.segmentButtonText = 'Cancel';
      this.masters.stateMaster = null;
    }
  }
  confirm() {
    this.confirmationService.confirm({
      message: 'The details are not saved . Are you sure you want to exit?',
      accept: () => {
        this.router.navigate(['engage']);
      }
    });
  }

  onOptionsSelected(event: string, source: string) {
    if (source === 'country') {
      console.log(event);
      this.webService.getZones(parseInt(event, 10)).subscribe((res) => {
        console.log(res);
        this.masters.zoneMaster = res;
        this.masters.branchMaster = null;
        this.masters.stateMaster = null;
        this.masters.supervisorMaster = null;
        this.supervisorModels = null;
        this.hierarchyUserModels = null;
      });
    }
    if (source === 'zone') {
      console.log(event);
      this.webService.getBranches(parseInt(event, 10)).subscribe((res) => {
        console.log(res);
        this.masters.branchMaster = res;
        this.masters.stateMaster = null;
        this.masters.supervisorMaster = null;
        this.supervisorModels = null;
        this.hierarchyUserModels = null;
      });
    }
    if (source === 'branch') {
      console.log(event);
      this.webService.getStates(parseInt(event, 10)).subscribe((res) => {
        console.log(res);
        this.masters.stateMaster = res;
      });
    }
    if (source === 'state') {
      console.log(event);
      this.webService.getRoleBasedUser('Supervisor', this.geoMapping.countryId, parseInt(event, 10))
        .subscribe((res) => {
          console.log(res);
          this.supervisorModels = res;
        });
    }

    if (source === 'super') {
      this.webService.getRoleBasedUser('Marketing User', this.geoMapping.countryId, this.geoMapping.stateId)
        .subscribe((res) => {
          console.log(res);
          this.hierarchyUserModels = res;
        });
    }
  }

  onCancelReset() {
    this.confirm();
  }

  saveData() {
    console.log(this.geoMapping);
    this.webService.saveGeoHierarchy(this.geoMapping).subscribe((res) => {
      console.log(res);
      this.saveConfirm();
      this.router.navigate(['engage']);
    });
  }

  saveConfirm() {
    // this.confirmationService.confirm({
    //   message: 'The details saved successfully',
    //   accept: () => {
    this.router.navigate(['engage']);
    //   }
    // });
  }

  getMarketingUser() {
    this.webService.getRoleBasedUser('Marketing User', this.geoMapping.countryId, this.geoMapping.stateId)
      .subscribe((res) => {
        console.log(res);
        this.hierarchyUserModels = res;
      });
  }
}
