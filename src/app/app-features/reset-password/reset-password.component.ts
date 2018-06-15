import { Component, ComponentFactoryResolver, Inject, forwardRef, OnInit } from '@angular/core';
import { WebService, AppBaseComponent, UserMaster } from '@app/app-core';
import { AppFeatureComponent } from '@app/app-features/app.feature.component';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'reset-password.component.html',
    styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent extends AppBaseComponent implements OnInit {
    constructor(private webService: WebService,
        public componentFactoryResolver: ComponentFactoryResolver,
        public router: Router,
        @Inject(forwardRef(() => AppFeatureComponent)) private appFeatureComponent: AppFeatureComponent) {
        super(componentFactoryResolver);
    }
    oldPassword: string;
    userPassword: string;
    conPassword: string;
    notFirstLogin: boolean;
    ngOnInit(): void {
        this.notFirstLogin = this.getState<UserMaster>('usermodel').notFirstLogin;
        this.oldPassword = '';
        this.userPassword = '';
        this.conPassword = '';
    }

    ResetPassword() {
        if (this.ValidateFields()) {
            if (this.comparePassword(this.userPassword, this.conPassword)) {
                this.webService.ResetPassword(this.userPassword, this.oldPassword).subscribe(
                    res => {
                        this.appFeatureComponent.updateLayout(true);
                        console.log(res);
                        this.setState('usermodel', JSON.parse(res.text()));
                        this.notFirstLogin = this.getState<UserMaster>('usermodel').notFirstLogin;
                        this.showModalPopup('success', 'Password changed successfully.', 'engage');
                    }
                );
            } else {
                this.showModalPopup('Invalid', 'Passwords should match', '', false);
            }
        } else {
            this.showModalPopup('Invalid', 'All fields are mandatory', '', false);
        }
    }

    Cancel() {
        if (!this.notFirstLogin) {
            this.clearAllStorage();
            this.router.navigate(['login']);
        } else {
            this.router.navigate(['engage']);
        }
    }

    ValidateFields(): boolean {
        if (this.notFirstLogin) {
            if (!this.oldPassword || !this.userPassword || !this.conPassword) {
                return false;
            } else {
                return true;
            }
        } else {
            if (!this.userPassword || !this.conPassword) {
                return false;
            } else {
                return true;
            }
        }
    }
}
