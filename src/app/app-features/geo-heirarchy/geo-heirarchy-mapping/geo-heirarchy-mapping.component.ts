import {
  Component, OnInit, ViewEncapsulation, ComponentFactoryResolver
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppBaseComponent, GeoMapping, WebService, UserMaster } from '@app/app-core';
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
    public router: Router, private webService: WebService,
    public componentFactoryResolver: ComponentFactoryResolver
  ) {
    super(componentFactoryResolver, router);
    this.masters = this.activatedRoute.parent.snapshot.data.masters;
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

  onOptionsSelected(event: string, source: string) {
    if (source === 'country') {
      this.webService.getZones(parseInt(event, 10)).subscribe((res) => {
        this.masters.zoneMaster = res;
        this.masters.branchMaster = null;
        this.masters.stateMaster = null;
        this.masters.supervisorMaster = null;
        this.supervisorModels = null;
        this.hierarchyUserModels = null;
      });
    }
    if (source === 'zone') {
      this.webService.getBranches(parseInt(event, 10)).subscribe((res) => {
        this.masters.branchMaster = res;
        this.masters.stateMaster = null;
        this.masters.supervisorMaster = null;
        this.supervisorModels = null;
        this.hierarchyUserModels = null;
      });
    }
    if (source === 'branch') {
      this.webService.getStates(parseInt(event, 10)).subscribe((res) => {
        this.masters.stateMaster = res;
      });
    }
    if (source === 'state') {
      this.webService.getRoleBasedUser('Supervisor', this.geoMapping.countryId, parseInt(event, 10))
        .subscribe((res) => {
          this.supervisorModels = res;
        });
    }

    if (source === 'super') {
      this.webService.getRoleBasedUser('Marketing User', this.geoMapping.countryId, this.geoMapping.stateId)
        .subscribe((res) => {
          this.hierarchyUserModels = res;
        });
    }
  }

  onCancelReset() {
    this.showModalPopup('confirm', 'Are you sure you want to leave this page ?', 'engage');
  }

  saveData() {
    this.webService.saveGeoHierarchy(this.geoMapping).subscribe((res) => {
      console.log(res);
      this.showModalPopup('success', 'The mapping saved successfully', 'engage');
    });
  }

  saveConfirm() {
    this.router.navigate(['engage']);
  }

  getMarketingUser() {
    this.webService.getRoleBasedUser('Marketing User', this.geoMapping.countryId, this.geoMapping.stateId)
      .subscribe((res) => {
        this.hierarchyUserModels = res;
      });
  }
}
