import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppBaseComponent, School, WebService, Masters } from '@app/app-core';

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
    constructor(private router: Router, private activatedRoute: ActivatedRoute, private webService: WebService) {
        super();
        this.masters = this.activatedRoute.parent.snapshot.data.masters;
    }

    ngOnInit() {
        this.editMode = !!this.activatedRoute.snapshot.params.id;
        if (this.editMode) {
<<<<<<< HEAD
            this.schoolLst = this.activatedRoute.snapshot.data.schoolLst || [];
            this.schools = this.activatedRoute.snapshot.data.schoolLst || [];
            this.school = this.activatedRoute.snapshot.data.school;
        }
        console.log(this.school);
    }

    saveSchoolMaster() {
        console.log(this.school);
        this.webService.saveSchoolMaster(this.school).subscribe((res) => {
            console.log(res);
            this.schoolLst = res;
=======
            this.school = this.activatedRoute.snapshot.data.school;
        }
    }

    saveSchoolMaster() {
        this.webService.saveSchoolMaster(this.school).subscribe(() => {
>>>>>>> 63258e377dcb3c622ca6ced85d8ed02f1776ffe1
            this.router.navigate(['engage/school-master']);
        });
    }
}


