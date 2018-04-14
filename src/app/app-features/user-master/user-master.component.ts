import { Component, OnInit } from '@angular/core';
import { AppBaseComponent, Usermaster } from '@app/app-core';
@Component({
    selector: 'app-user-master',
    templateUrl: './user-master.component.html'
})
export class UserMasterComponent extends AppBaseComponent implements OnInit {
    userModel: Usermaster;
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
