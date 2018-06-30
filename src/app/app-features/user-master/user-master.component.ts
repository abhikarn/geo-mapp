import { Component, OnInit, ViewEncapsulation, ComponentFactoryResolver } from '@angular/core';
import { AppBaseComponent, UserMaster, WebService } from '@app/app-core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/primeng';
@Component({
    selector: 'app-user-master',
    templateUrl: './user-master.component.html',
    encapsulation: ViewEncapsulation.None,
    styles: ['.group p-calendar {position: relative}']
})
export class UserMasterComponent extends AppBaseComponent implements OnInit {
    userModel: UserMaster = {
        id: 0,
        userName: '', emailId: '', userPassword: '', isActive: false,
        lastLoginDate: new Date(), firstName: '', lastName: '', roleId: 0,
        roleName: '', status: '', countryId: 0, countryName: '',
        stateId: 0, stateName: '', zoneId: 0, zoneName: '',
        branchId: 0, branchName: '',
        cityId: 0, cityName: '', dateOfBirth: null
    };
    masters: any;
    showCountry: boolean;
    showZone: boolean;
    showBranch: boolean;
    showState: boolean;
    isEdit: boolean;
    userLst: UserMaster[];
    users: UserMaster[];
    currentPage = 0;
    constructor(private activatedRoute: ActivatedRoute, private webService: WebService,
        private confirmationService: ConfirmationService,
        public router: Router,
        public componentFactoryResolver: ComponentFactoryResolver
    ) {
        super(componentFactoryResolver);
        this.masters = this.activatedRoute.parent.snapshot.data.masters;
        this.isEdit = false;
    }

    ngOnInit() {
        console.log(this.activatedRoute.snapshot.data.userLst);
        this.userLst = this.activatedRoute.snapshot.data.userLst || [];
        this.users = this.activatedRoute.snapshot.data.userLst;
    }

    confirm() {
        this.confirmationService.confirm({
            message: 'The details are not saved . Are you sure you want to exit?',
            accept: () => {
                this.router.navigate(['user-master']);
            }
        });
    }

    onCancelReset() {
        this.showModalPopup('confirm', 'Are you sure you want to leave this page ?', 'engage');
    }

    saveData() {
        if (this.doValidation(this.userModel, ['userName', 'emailId', 'firstName', 'roleId'])) {
            console.log(this.userModel);
            this.webService.saveUserMaster(this.userModel).subscribe(res => {
                this.userModel = res;
                this.showModalPopup('success', 'The user saved successfully.', 'engage');
                // let userMaster: UserMaster = this.userLst.find((user) => user.userMasterId === this.userModel.userMasterId);
                // userMaster = this.userModel;
                console.log(res);
            });
        } else {
            this.showModalPopup('Invalid', 'Please enter all mandatory fields', '', false);
        }
    }

    doEdit(user: UserMaster) {
        console.log(user, 'Sumit');
        this.isEdit = true;
        this.userModel = user;
        this.toggleMasterDisplay(this.userModel.roleId);
    }

    updatePage(event) {
        this.currentPage = +event.page;
        this.userLst = this.users.slice(event.first, +event.first + +event.rows);
    }


    onOptionsSelected(event: string, source: string): void {
        this.isEdit = false;
        if (source === 'role') {
            this.toggleMasterDisplay(parseInt(event, 10));
        }
        if (source === 'country') {
            this.webService.getZones(parseInt(event, 10)).subscribe((res) => {
                this.masters.zoneMaster = res;
                this.masters.branchMaster = null;
                this.masters.stateMaster = null;
                this.masters.supervisorMaster = null;
            });
        }
        if (source === 'zone') {
            this.webService.getBranches(parseInt(event, 10)).subscribe((res) => {
                this.masters.branchMaster = res;
                this.masters.stateMaster = null;
                this.masters.supervisorMaster = null;
            });
        }
        if (source === 'branch') {
            this.webService.getStates(parseInt(event, 10)).subscribe((res) => {
                this.masters.stateMaster = res;
            });
        }
        if (source === 'state') {
            // this.webService.getRoleBasedUser('Supervisor', this.geoMapping.countryId, parseInt(event, 10))
            //   .subscribe((res) => {
            //     this.supervisorModels = res;
            //   });
        }
    }

    toggleMasterDisplay(event: number): void {
        switch (event) {
            case 1:
                this.showCountry = false;
                this.showZone = false;
                this.showBranch = false;
                this.showState = false;
                break;
            case 2:
                this.showCountry = true;
                this.showZone = true;
                this.showBranch = true;
                this.showState = true;
                this.webService.getStates(this.userModel.branchId).subscribe((res) => {
                    this.masters.stateMaster = res;
                });
                break;
            case 3:
                this.showCountry = true;
                this.showZone = true;
                this.showBranch = true;
                this.showState = true;
                this.webService.getStates(this.userModel.branchId).subscribe((res) => {
                    this.masters.stateMaster = res;
                });
                break;
            case 4:
                this.showCountry = true;
                this.showZone = false;
                this.showBranch = false;
                this.showState = false;
                break;
            case 5:
                this.showCountry = true;
                this.showZone = true;
                this.showBranch = false;
                this.showState = false;
                this.webService.getBranches(this.userModel.zoneId).subscribe((res) => {
                    this.masters.branchMaster = res;
                    this.masters.stateMaster = null;
                });
                break;
            case 6:
                this.showCountry = true;
                this.showZone = true;
                this.showBranch = true;
                this.showState = false;
                this.webService.getZones(this.userModel.countryId).subscribe((res) => {
                    this.masters.zoneMaster = res;
                    this.masters.branchMaster = null;
                    this.masters.stateMaster = null;
                });
                break;
            default:
                break;
        }
    }

}
