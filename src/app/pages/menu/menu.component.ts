import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() currentPage: string = ''
  @Input() isLoggedIn?: firebase.default.User | null;
  @Output() selectedPage = new EventEmitter()
  @Output() onCloseSidenav: EventEmitter<boolean> = new EventEmitter()

  constructor(private loadingService: AuthService) { }

  ngOnInit(): void {
  }

  changePage() {
    this.selectedPage.emit(this.currentPage)
  }

  close(loggingOut?: boolean) {
    this.onCloseSidenav.emit(true)
    if (loggingOut) {
      this.logout()
    }
  }

  logout() {
    this.loadingService.normal_logout().then(() => {
      console.log("Succesful logout!")
    }).catch(error => {
      console.error(error)
    })
  }
}
