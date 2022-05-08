import { Injectable } from '@angular/core';
import {Observable, Subscriber} from "rxjs";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  normal_login(email: string,  passwd: string) {
    return this.auth.signInWithEmailAndPassword(email, passwd)
  }

  normal_signup(email:string, passwd: string) {
    return this.auth.createUserWithEmailAndPassword(email, passwd)
  }

  normal_logout() {
    return this.auth.signOut()
  }

  isLoggedIn() {
    return this.auth.user;  // ha be van jelentkezve, usert adja vissza, amúgy nullt
  }
}
