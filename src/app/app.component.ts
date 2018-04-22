import { Component, ViewEncapsulation } from '@angular/core';
import { AppBaseComponent } from '@app/app-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent extends AppBaseComponent {
  title = 'app';
  constructor() {
    super();
  }
}

