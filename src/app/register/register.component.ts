import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

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

  constructor() { }

  ngOnInit(): void {
  }

  register() {
    console.log(this.registerForm.value.fn)
  }
}
