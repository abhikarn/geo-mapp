import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppBaseComponent, School } from '@app/app-core';
@Component({
    selector: 'app-school-master-create',
    templateUrl: './school-master-create.component.html'
})
export class SchoolMasterCreateComponent extends AppBaseComponent implements OnInit {
    school: School = {schoolName: ''};
    masters: any;
    constructor(private activatedRoute: ActivatedRoute) {
        super();
        this.masters = this.activatedRoute.parent.snapshot.data.masters;
    }

    ngOnInit() {
    }

}
