import { Component, OnInit, ComponentFactoryResolver, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppBaseComponent, School, WebService, Masters } from '@app/app-core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-school-master-create',
    templateUrl: './school-master-create.component.html'
})
export class SchoolMasterCreateComponent extends AppBaseComponent implements OnInit {
    school: School = { schoolName: '', source: 'web', status: 'Active', approved: true };
    masters: any;
    masterConst: any = Masters;
    currentPage = 0;
    editMode = false;
    imageData: any;
    sanitizedImageData: SafeResourceUrl;
    constructor(public router: Router, private activatedRoute: ActivatedRoute,
        private webService: WebService, public componentFactoryResolver: ComponentFactoryResolver,
        private sanitizer: DomSanitizer
    ) {
        super(componentFactoryResolver);
        this.masters = this.activatedRoute.parent.snapshot.data.masters;
    }

    ngOnInit() {
        this.editMode = !!this.activatedRoute.snapshot.params.id;
        if (this.editMode) {
            this.school = this.activatedRoute.snapshot.data.school;
            this.imageData = !this.activatedRoute.snapshot.data.schoolImage ?
                null : 'data:image/png;base64,' + this.activatedRoute.snapshot.data.schoolImage;
            this.sanitizedImageData = this.sanitizer.bypassSecurityTrustUrl(this.imageData);
        }
    }

    saveSchoolMaster() {
        if (this.doValidation(this.school, ['schoolName', 'schoolType', 'stateId'])) {
            this.webService.saveSchoolMaster(this.school).subscribe(() => {
                this.showModalPopup('success', 'The school saved successfully', 'engage/school-master');
                // this.router.navigate(['engage/school-master']);
            });
        } else {
            this.showModalPopup('Invalid', 'Please enter all mandatory fields', '', false);
        }
    }

    goToList() {
        this.showModalPopup('confirm', 'Are you sure you want to leave this page ?', 'engage/school-master');
    }
}


