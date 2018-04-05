import { Component, OnInit } from '@angular/core';
import { AppBaseComponent } from '@app/app-core';
@Component({
  selector: 'app-master',
  templateUrl: './master.component.html'
})
export class MasterComponent extends AppBaseComponent implements OnInit {
  // TODO: move to service ;
  masterTypeList = ['Country', 'Zone' , 'Branch'];
  masterType: string;
  constructor() {
    super();
  }

  ngOnInit() {
  }

  saveMaster() {
    
  }

  onOptionsSelected(event , source) {
    console.log(event, source);
  }
}

