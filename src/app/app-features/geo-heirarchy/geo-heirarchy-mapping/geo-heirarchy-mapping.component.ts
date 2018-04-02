import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppBaseComponent, GeoMapping } from '@app/app-core';
import { ConfirmationService } from 'primeng/primeng';
@Component({
  selector: 'app-create-geo-heirarchy',
  templateUrl: './geo-heirarchy-mapping.component.html',
  styleUrls: ['./geo-heirarchy-mapping.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductSegmentComponent extends AppBaseComponent implements OnInit {
  segmentLabelText = '';
  segmentButtonText = '';
  editMode = false;
  optionsCountryMaster = ['Nigeria', 'Ghana'];
  optionsZoneMaster = ['NZoneA', 'NZoneB', 'NZoneC', 'GZoneA', 'GZoneB', 'GZoneC'];
  optionsBranchMaster = ['NBranchA', 'NBranchB', 'NBranchC', 'GBranchA', 'GBranchB', 'GBranchC'];
  optionsStateMaster = ['NStateA', 'NStateB', 'NStateC', 'GStateA', 'GStateB', 'GStateC'];
  optionsSupervisorMaster = ['NSVA', 'NSVB', 'NSVC', 'GSVA', 'GSVB', 'GSVC'];
  geoMapping: GeoMapping = {
    country: '',
    state: '',
    zone: '',
    branch: '',
    supervisor: '',
    marketingUser: '',
  };
  constructor(private activatedRoute: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private router: Router) {
    super();
  }

  ngOnInit() {

    this.editMode = !!this.activatedRoute.snapshot.params.id;
    if (this.editMode) {
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
      console.log(this.optionsZoneMaster);
    }
  }

  onCancelReset() {
    this.confirm();
  }

  saveData() {
    // this.webService.getProducts(this.geoMapping);
    console.log(this.geoMapping);
  }

}
