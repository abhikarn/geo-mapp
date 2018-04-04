import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppBaseComponent, GeoMapping } from '@app/app-core';
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
  geoMapping: GeoMapping = { country: '', zone: '', branch: '', state: '', supervisor: '', marketingUser: '' };
  constructor(private activatedRoute: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private router: Router) {
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

  onOptionsSelected(event: string, source) {
    if (source === 'country') {
      console.log(event);
    }
  }

  onCancelReset() {
    this.confirm();
  }

  saveData() {
    console.log(this.geoMapping);
  }
}
