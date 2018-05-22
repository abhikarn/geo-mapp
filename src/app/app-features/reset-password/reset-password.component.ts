import { OnInit, Component, ComponentFactoryResolver, Inject, forwardRef } from '@angular/core';
import { WebService, AppBaseComponent } from '@app/app-core';
import { AppFeatureComponent } from '@app/app-features/app.feature.component';
import { Router } from '@angular/router';
import {
    UserMaster
} from '@app/app-core';

@Component({
    templateUrl: 'reset-password.component.html',
    styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent extends AppBaseComponent implements OnInit {
    constructor(private webService: WebService,
        public componentFactoryResolver: ComponentFactoryResolver,
        public router: Router,
        @Inject(forwardRef(() => AppFeatureComponent)) private appFeatureComponent: AppFeatureComponent) {
        super(componentFactoryResolver)

    }
    userModel: UserMaster = this.getState<UserMaster>('usermodel');
    ngOnInit() {
        this.userModel.userPassword = '';
    }

    ResetPassword() {
        this.userModel.notFirstLogin = true;
        this.webService.saveUserMaster(this.userModel).subscribe(
            res => {
                this.userModel = res;
                this.showModalPopup('success', 'Password changed successfully.', 'engage');
                this.appFeatureComponent.updateLayout(true);
                this.router.navigate(['engage']);
                console.log(res);
            }
        );
    }

    Cancel() {
        this.clearAllStorage();
        this.router.navigate(['login']);
    }

}
