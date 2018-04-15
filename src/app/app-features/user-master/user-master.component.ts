import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppBaseComponent, UserMaster, WebService } from '@app/app-core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/primeng';
@Component({
    selector: 'app-user-master',
    templateUrl: './user-master.component.html',
    encapsulation: ViewEncapsulation.None
})
export class UserMasterComponent extends AppBaseComponent implements OnInit {
    userModel: UserMaster = {
        userMasterId: 0,
        userName: '', emailId: '', userPassword: '', isActive: true,
        lastLoginDate: new Date(), firstName: '', lastName: '', roleId: 0,
        roleName: '', status: '', countryId: 0, countryName: '',
        stateId: 0, stateName: '', zoneId: 0, zoneName: '',
        branchId: 0, branchName: '',
        cityId: 0, cityName: ''
    };
    masters: any;
    userLst: UserMaster[];
    constructor(private activatedRoute: ActivatedRoute, private webService: WebService,
        private confirmationService: ConfirmationService,
        private router: Router
    ) {
        super();
        this.masters = this.activatedRoute.parent.snapshot.data.masters;
    }

    ngOnInit() {
        console.log(this.activatedRoute.snapshot.data.userLst);
        this.userLst = this.activatedRoute.snapshot.data.userLst || [];
    }

    confirm() {
        this.confirmationService.confirm({
            message: 'The details are not saved . Are you sure you want to exit?',
            accept: () => {
                this.router.navigate(['/user-master']);
            }
        });
    }

    onCancelReset() {
        this.confirm();
    }

    saveData() {
        console.log(this.userModel);
        this.webService.saveUserMaster(this.userModel).subscribe(res => {
            this.userLst = res;
            console.log(res);
        });
    }

    doEdit(user: UserMaster) {
        this.userModel = user;
    }

}
