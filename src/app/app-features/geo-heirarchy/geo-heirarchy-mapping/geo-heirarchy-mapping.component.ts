import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppBaseComponent, GeoMapping, WebService } from '@app/app-core';
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
  geoMapping: GeoMapping = { countryId: 1, zoneId: 1, branchId:1, stateId: 1, supervisorId: 1, marketingHierarchyUser: 'sdfsdf' };
  constructor(private activatedRoute: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private router: Router, private webService: WebService) {
    super();
    this.masters = this.activatedRoute.parent.snapshot.data.masters;
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
        this.router.navigate(['/geo-heirarchy']);
      }
    });
  }

  onOptionsSelected(event: string, source: string) {
    if (source === 'country') {
      console.log(event);
    }
  }

  onCancelReset() {
    this.confirm();
  }

  saveData() {
    console.log(this.geoMapping);
    this.webService.saveGeoHierarchy(this.geoMapping).subscribe((res) => {
      console.log(res);
    });
  }
}
