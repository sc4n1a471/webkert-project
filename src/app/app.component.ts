import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'webkert-project';

  // openedPage = 'main'
  openedPage = '' // ezzel ha reloadolunk egy oldalt, akkor nem látszódik a main->url átugrás


  // router: Router
  // constructor(router: Router) {
  //   this.router = router
  // }
  // ====== megegyezik
  // constructor(private router: Router) {
  // }
  constructor(private router: Router) {}


  changingPage(selectedPage: string) {
    // this.openedPage = selectedPage
    // console.log(this.openedPage)

    this.router.navigateByUrl(selectedPage)
  }

  ngOnInit(): void {
    this.router.events
        .pipe(filter(events => events instanceof NavigationEnd))
        .subscribe((esemenyek: any) => {
          /* console.log(esemenyek); */
          /* console.log(esemenyek.urlAfterRedirects as string); - ez /url-t ad */
          this.openedPage = (esemenyek.urlAfterRedirects as string).split('/')[1];
          /* console.log(this.openedPage); -- url levágva normálisan */
        })
  }

  toggleSidenav(sidenav: MatSidenav) {
    sidenav.toggle()
  }

  onCloseSidenav(event: any, sidenav: MatSidenav) {
    if (event === true) {
      sidenav.close()
    }
  }

}
