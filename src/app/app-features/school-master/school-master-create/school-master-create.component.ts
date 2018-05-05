import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppBaseComponent, School, WebService, Masters } from '@app/app-core';

@Component({
    selector: 'app-school-master-create',
    templateUrl: './school-master-create.component.html'
})
export class SchoolMasterCreateComponent extends AppBaseComponent implements OnInit {
    school: School = { schoolName: '', source: 'web' };
    masters: any;
    schoolLst: School[];
    schools: School[];
    masterConst: any = Masters;
    currentPage = 0;
    constructor(private router: Router, private activatedRoute: ActivatedRoute, private webService: WebService) {
        super();
        this.masters = this.activatedRoute.parent.snapshot.data.masters;
    }

    ngOnInit() {
        console.log(this.activatedRoute.snapshot.data.schoolLst);
        this.schoolLst = this.activatedRoute.snapshot.data.schoolLst || [];
        this.schools = this.activatedRoute.snapshot.data.schoolLst;
    }

    saveSchoolMaster() {
        console.log(this.school);
        this.webService.saveSchoolMaster(this.school).subscribe((res) => {
            console.log(res);
            this.schoolLst = res;
            this.router.navigate(['engage']);
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

