import {Component, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
    selector: 'app-my-profile',
    templateUrl: './my-profile.component.html',
    styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

    loading: boolean = false

    userInfo?: User;

    newUsername = new FormControl('', Validators.required)

    constructor(
        private userService: UserService,
        private _snackBar: MatSnackBar
    ) { }

    ngOnInit(): void {
        this.loading = true;
        const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
        this.userService.getUserById(user.uid).subscribe(data => {
            console.log(data)
            this.userInfo = data;
            console.log(this.userInfo?.email)
            this.loading = false;
        }, error => {
            console.error(error)
            this.loading = false;
        })
    }

    updateUsername() {
        this.userInfo!.username = this.newUsername.value
        this.newUsername.reset()
        this.userService.updateUsername(this.userInfo as User)
        this.openSnackBar("Sikeres módosítás!")
    }

    openSnackBar(message: string) {
        this._snackBar.open(message, "Bezár", {
            duration: 3000
        });
    }

    entered(event: any) {
        if (event.keyCode === 13) {
            this.updateUsername()
        }
    }
}
