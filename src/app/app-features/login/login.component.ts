import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
    HeaderComponent, LayoutComponent, AuthService,
    AppBaseComponent, UserMaster
} from '@app/app-core';

// import { AppBaseComponent, UserMaster, WebService } from '@app/app-core';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent extends AppBaseComponent implements OnInit {
    model: UserMaster = { userMasterId: 0, userName: '', userPassword: '' };
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
        this.authService.login(this.model)
            .subscribe(
                data => {
                    this.loading = false;
                    this.model = JSON.parse(data.text());
                    this.setState('authtoken', this.model.authToken);
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

