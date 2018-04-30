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
  userModels: UserMaster[];
  geoMapping: GeoMapping = {
    countryId: 1, countryName: '', zoneId: 1, zoneName: '',
    branchId: 1, branchName: '', stateId: 1, stateName: '',
    supervisorId: 1, supervisorName: '',
    marketingHierarchyUserId: 1
  };
  constructor(private activatedRoute: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private router: Router, private webService: WebService
  ) {
    super();
    this.masters = this.activatedRoute.parent.snapshot.data.masters;
    this.masters.stateMaster = null;
  }

  ngOnInit() {
    this.editMode = !!this.activatedRoute.snapshot.params.id;
    if (this.editMode) {
      console.log(this.activatedRoute.snapshot.data.geoMap);
      this.geoMapping = this.activatedRoute.snapshot.data.geoMap;
      this.segmentLabelText = 'Update Geo Heirarchy';
      this.segmentButtonText = 'Reset';
    } else {
      this.segmentLabelText = 'Create Geo Heirarchy';
      this.segmentButtonText = 'Cancel';
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
      this.webService.getZones(parseInt(event)).subscribe((res) => {
        console.log(res);
        this.masters.zoneMaster = res;
        this.masters.branchMaster = null;
        this.masters.stateMaster = null;
        this.masters.supervisorMaster = null;
        this.userModels = null;
      });
    }
    if (source === 'zone') {
      console.log(event);
      this.webService.getBranches(parseInt(event)).subscribe((res) => {
        console.log(res);
        this.masters.branchMaster = res;
        this.masters.stateMaster = null;
        this.masters.supervisorMaster = null;
        this.userModels = null;
      });
    }
    if (source === 'branch') {
      console.log(event);
      this.webService.getStates(parseInt(event)).subscribe((res) => {
        console.log(res);
        this.masters.stateMaster = res;
      });
    }
    if (source === 'state') {
      console.log(event);
      this.webService.getRoleBasedUser(this.geoMapping.countryId, parseInt(event), 'Supervisor')
        .subscribe((res) => {
          console.log(res);
          this.masters.supervisorMaster = res;
        });
    }

    if (source === 'super') {
      this.webService.getRoleBasedUser(this.geoMapping.countryId, this.geoMapping.stateId, 'Marketing User')
        .subscribe((res) => {
          console.log(res);
          this.userModels = res;
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
    this.webService.getRoleBasedUser(this.geoMapping.countryId, this.geoMapping.stateId, 'Marketing User')
      .subscribe((res) => {
        console.log(res);
        this.userModels = res;
      });
  }
}
