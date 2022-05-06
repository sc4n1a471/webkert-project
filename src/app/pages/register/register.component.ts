import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

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

  constructor(private loadingService: AuthService) { }

  ngOnInit(): void {
  }

  register() {
    console.log(this.registerForm.value.fn)
    this.loadingService.normal_signup(this.registerForm.get('email')?.value, this.registerForm.get('passwd')?.value)
        .then(credentials => {
          console.log("Sign up credentials: ", credentials)
        })
        .catch(error => {
          console.error(error)
        })
  }
}
