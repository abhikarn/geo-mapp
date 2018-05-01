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
        private router: Router
    ) {
        super();
        this.componentData = this.activeRoute.snapshot.data['layout'];
        this.componentData.component = HeaderComponent;
        this.componentData.isAuth = false;
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
                            this.authResponse = JSON.parse(aData.text());
                            this.setState('authtoken', this.authResponse.access_token);
                            this.setState('tokentype', this.authResponse.token_type);
                            console.log(this.authResponse.access_token, 'authtoken');
                            console.log(this.authResponse.token_type, 'tokentype');
                        },

                            error => {
                                console.log(error);
                            })
                        ;

                    this.setState('usermodel', this.model);
                    this.router.navigate(['engage']);
                },
                error => {
                    this.clearAllStorage();
                    this.showLoader = false;
                    console.log(error);
                    this.loading = false;
                });
    }
}

