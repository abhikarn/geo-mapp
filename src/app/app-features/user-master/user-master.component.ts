import { Component, OnInit } from '@angular/core';
import { AppBaseComponent } from '@app/app-core';
import { usermaster } from '@app/app-core/models/user.model';
@Component({
    selector: 'app-user-master',
    templateUrl: './user-master.component.html'
})
export class UserMasterComponent extends AppBaseComponent implements OnInit {
    userModel: usermaster;
    constructor() {
        super();
    }

    ngOnInit() {
    }

    onCancelReset() {

    }

    saveData() {
        console.log(this.userModel);
    }

}
