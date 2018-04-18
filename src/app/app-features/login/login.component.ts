import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent, LayoutComponent, AuthService } from '@app/app-core';

// import { AppBaseComponent, UserMaster, WebService } from '@app/app-core';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
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
        this.authService.isAuth = false;
        this.router.navigate(['engage']);
        // this.authenticationService.login(this.model.username, this.model.password)
        //     .subscribe(
        //         data => {
        //             this.router.navigate([this.returnUrl]);
        //         },
        //         error => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         });
    }
}
