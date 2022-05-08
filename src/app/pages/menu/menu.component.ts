import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

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

    constructor(
        private loadingService: AuthService,
        private _snackBar: MatSnackBar,
        private router: Router
    ) { }

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
            this.openSnackBar("Sikeres kijelentkezés! 👍")
            this.router.navigateByUrl("login")
        }).catch(error => {
            console.error(error)
            this.openSnackBar("Sikertelen kijelentkezés! 😢")
        })
    }

    openSnackBar(message: string) {
        this._snackBar.open(message, "Bezár", {
            duration: 3000
        });
    }
}
