import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    registerForm = new FormGroup( {
        fn: new FormControl(''),
        ln: new FormControl(''),
        email: new FormControl(''),
        passwd: new FormControl(''),
        passwd_conf: new FormControl(''),
        birthday: new FormControl('')
    })

    loading: boolean = false

    constructor(
        private loadingService: AuthService,
        private userService: UserService,
        private _snackBar: MatSnackBar,
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    register() {

        console.log(this.registerForm.value.fn)
        this.loading = true

        this.loadingService.normal_signup(this.registerForm.get('email')?.value, this.registerForm.get('passwd')?.value)
            .then(credentials => {

                const userCuccli: User = {
                    id: credentials.user?.uid as string,
                    email: this.registerForm.get('email')?.value,
                    username: this.registerForm.get('email')?.value.split('@')[0],
                    firstname: this.registerForm.get('fn')?.value,
                    lastname: this.registerForm.get('ln')?.value,
                    birtday: this.registerForm.get('birthday')?.value
                };

                this.userService.createUser(userCuccli).then(_ => {
                    this.loading = false
                    this.openSnackBar("Sikeres regisztráció! 👍")
                    this.router.navigateByUrl("offers")
                }).catch(_ => {
                    console.error("noooo");
                    this.loading = false
                    this.openSnackBar("Sikertelen regisztráció! 😢")
                })
            })
            .catch(error => {
                console.error(error)
                this.loading = false;
                this.openSnackBar('Sikertelen regisztráció! 😢 Hibakód konzolba írva!')
            })
    }

    openSnackBar(message: string) {
        this._snackBar.open(message, "Bezár", {
            duration: 3000
        });
    }
}
