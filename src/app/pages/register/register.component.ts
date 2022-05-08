import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";

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



    constructor(
        private loadingService: AuthService,
        private userService: UserService,
        private _snackBar: MatSnackBar
    ) { }

    ngOnInit(): void {
    }

    register() {

        console.log(this.registerForm.value.fn)

        this.loadingService.normal_signup(this.registerForm.get('email')?.value, this.registerForm.get('passwd')?.value)
            .then(credentials => {

                console.log("Sign up credentials: ", credentials)

                const userCuccli: User = {
                    id: credentials.user?.uid as string,
                    email: this.registerForm.get('email')?.value,
                    username: this.registerForm.get('email')?.value.split('@')[0],
                    firstname: this.registerForm.get('fn')?.value,
                    lastname: this.registerForm.get('ln')?.value,
                    birtday: this.registerForm.get('birthday')?.value
                };

                this.userService.createUser(userCuccli).then(_ => {
                    console.log("Succesful user insert")
                    this.openSnackBar("Sikeres regisztráció! 👍")
                }).catch(_ => {
                    console.error("noooo");
                    this.openSnackBar("Sikertelen regisztráció! 😢")
                })
            })
            .catch(error => {
                console.error(error)
                this.openSnackBar('Sikertelen regisztráció! 😢 Hibakód konzolba írva!')
            })
    }

    openSnackBar(message: string) {
        this._snackBar.open(message, "Bezár", {
            duration: 3000
        });
    }
}
