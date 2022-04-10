import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webkert-project';

  // openedPage = 'main'

  constructor(private router: Router) {
  }

  changingPage(selectedPage: string) {
    // this.openedPage = selectedPage
    // console.log(this.openedPage)
    this.router.navigateByUrl(selectedPage)
  }
}
