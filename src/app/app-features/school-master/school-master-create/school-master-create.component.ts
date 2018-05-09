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
    schoolLst: School[];
    schools: School[];
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
            this.router.navigate(['engage/school-master']);
        });
    }

    doEdit(school: School) {
        this.school = school;
    }

    updatePage(event) {
        this.currentPage = +event.page;
        this.schoolLst = this.schools.slice(event.first, +event.first + +event.rows);
    }
}

