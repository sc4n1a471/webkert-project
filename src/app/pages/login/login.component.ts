import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormControl } from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {Subscriber, Subscription} from "rxjs";

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

  constructor(private loadingService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
      this.loading = true;
      console.log(this.email.value, this.passwd.value)
      console.log("loading = ", this.loading)

      // this.loadingService.loading_test1(this.email.value, this.passwd.value)
      //     .then((data: boolean) => {
      //           console.log("success")
      //           this.router.navigateByUrl("/main")
      //       })
      //     .catch((error) => {
      //           console.error(error)
      //       })
      //     .finally(() => {
      //           console.log("finallyyyy")
      //       })

      this.loadingSubscription = this.loadingService.loading_test2(this.email.value, this.passwd.value)
          .subscribe(
              {
                  next: (data: boolean) => {
                      console.log(data)
                      this.router.navigateByUrl("/main")
                      // this.loading = false
                  }, error: (error) => {
                      console.error("problem lenni: ", error)
                      this.loading = false
                  }, complete: () => {
                      console.log("finally?")
                      this.loading = false
                  }
              }
          )
  }

  ngOnDestroy() {
      console.log("destroyed")
      this.loadingSubscription?.unsubscribe()
  }


}
