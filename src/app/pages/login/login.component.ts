import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

    email = new FormControl('')
    passwd = new FormControl('')

    loadingSubscription?: Subscription;

    loading: boolean = false

    constructor(
        private loadingService: AuthService,
        private router: Router,
        private _snackBar: MatSnackBar
    ) { }

    ngOnInit(): void {
    }

    login() {
        this.loading = true;

        this.loadingService.normal_login(this.email.value, this.passwd.value)
            .then(credentials => {
                this.router.navigateByUrl("/main")
                this.loading = false
                this.openSnackBar("Sikeres bejelentkezés!");
            })
            .catch(error => {
                console.error(error)
                this.loading = false
                this.openSnackBar("Sikertelen bejelentkezés!");
            })
    }

    ngOnDestroy() {
        this.loadingSubscription?.unsubscribe()
    }

    openSnackBar(message: string) {
        this._snackBar.open(message, "Bezár", {
            duration: 3000
        });
    }

    entered(event: any) {
        if (event.keyCode === 13) {
            this.login()
        }
    }
}
