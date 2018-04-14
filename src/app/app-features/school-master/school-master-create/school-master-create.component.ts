import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppBaseComponent, School, WebService } from '@app/app-core';

@Component({
    selector: 'app-school-master-create',
    templateUrl: './school-master-create.component.html'
})
export class SchoolMasterCreateComponent extends AppBaseComponent implements OnInit {
    school: School = { schoolName: '' };
    masters: any;
    schoolLst: School[];
    constructor(private activatedRoute: ActivatedRoute, private webService: WebService) {
        super();
        this.masters = this.activatedRoute.parent.snapshot.data.masters;
    }

    ngOnInit() {
        console.log(this.activatedRoute.snapshot.data.schoolLst);
        this.schoolLst = this.activatedRoute.snapshot.data.schoolLst || [];
    }

    saveSchoolMaster() {
        console.log(this.school);
        this.webService.saveSchoolMaster(this.school).subscribe((res) => {
            console.log(res);
            this.schoolLst = res;
        });
    }
}

