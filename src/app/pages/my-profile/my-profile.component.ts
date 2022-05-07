import {Component, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-my-profile',
    templateUrl: './my-profile.component.html',
    styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

    loading: boolean = false

    userInfo?: User;

    newEmail = new FormControl('', Validators.required)

    constructor(private userService: UserService) { }

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

    updateEmail() {
        this.userInfo!.email = this.newEmail.value
        this.userService.updateEmail(this.userInfo as User)
    }

}
