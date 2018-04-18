import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent, LayoutComponent, AuthService, AppBaseComponent, UserMaster } from '@app/app-core';

// import { AppBaseComponent, UserMaster, WebService } from '@app/app-core';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent extends AppBaseComponent implements OnInit {
    model: UserMaster = { userMasterId: 0, userName: '', userPassword: '' };
    loading = false;
    returnUrl: string;
    @ViewChild('layout') layout: LayoutComponent;
    componentData = null;
    constructor(
        private activeRoute: ActivatedRoute,
        private authService: AuthService,
        private router: Router
        // private authenticationService: AuthenticationService,
        // private webService: WebService
    ) {
        super();
        this.componentData = this.activeRoute.snapshot.data['layout'];
        this.componentData.component = HeaderComponent;
    }

    ngOnInit() {
        // reset login status
        // this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.activeRoute.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.authService.login(this.model)
            .subscribe(
                data => {
                    console.log(data.text());
                    this.loading = false;
                    this.model = JSON.parse(data.text());
                    this.authService.isAuth = true;
                    this.setState('authtoken', this.model.authToken);
                    this.router.navigate(['engage']);
                },
                error => {
                    this.authService.isAuth = false;
                    //this.alertService.error(error);
                    console.log(error);
                    this.loading = false;
                });
    }
}