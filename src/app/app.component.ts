import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  twins(a, b) {
    console.log(b);
    const results = [];
    for (let i = 1; i < a.length - 1; i++) {
      let prev = 0;
      // let next = 0;
      if (i % 2 === 0) {

        if (prev !== i) {
          const temp = a[prev];
          a[prev] = a[i];
          a[i] = temp;
        }
        prev = i;
      }
    }
    return results;
  }
}
