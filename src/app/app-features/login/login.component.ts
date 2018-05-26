import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
    HeaderComponent, LayoutComponent, AuthService,
    AppBaseComponent, UserMaster
} from '@app/app-core';
import { Authorization } from '@app/app-core/models/auth.model';
// import { AppBaseComponent, UserMaster, WebService } from '@app/app-core';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent extends AppBaseComponent implements OnInit {
    model: UserMaster = { id: 0, userName: '', userPassword: '' };
    authModel: Authorization = { username: '', password: '', grant_type: 'password' };
    authResponse?: any;
    loading = false;
    showLoader = false;
    returnUrl: string;
    @ViewChild('layout') layout: LayoutComponent;
    componentData = null;
    constructor(
        private activeRoute: ActivatedRoute,
        private authService: AuthService,
        public router: Router
    ) {
        super();
        this.componentData = this.activeRoute.snapshot.data['layout'];
        this.componentData.component = HeaderComponent;
        this.componentData.menuConfig.showMenu = false;
        this.componentData.menuConfig.showProfile = false;
    }

    ngOnInit() {
    }

    login() {
        this.loading = true;
        this.showLoader = true;
        console.log(this.model);
        this.authService.login(this.model)
            .subscribe(
                data => {
                    this.loading = false;
                    this.model = JSON.parse(data.text());
                    this.authModel.username = this.model.userName;
                    this.authModel.password = this.model.userPassword;
                    this.authModel.grant_type = 'password';
                    this.authService.getToken(this.authModel)
                        .subscribe(aData => {
                            this.authResponse = aData;
                            this.setState('authtoken', this.authResponse.access_token);
                            this.setState('tokentype', this.authResponse.token_type);
                            this.setState('usermodel', this.model);
                            if (this.model.notFirstLogin) {
                                this.router.navigate(['engage']);
                            } else {
                                this.router.navigate(['engage/reset-password']);
                            }
                        },

                            error => {
                                console.log(error);
                            })
                        ;
                },
                error => {
                    this.clearAllStorage();
                    this.showLoader = false;
                    console.log(error);
                    this.loading = false;
                });
    }
}

