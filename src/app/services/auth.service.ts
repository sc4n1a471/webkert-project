import { Injectable } from '@angular/core';
import {Observable, Subscriber} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loading_test1(email: string, passwd: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "e@e.e" && passwd === "1111") {
          resolve(true)
        } else {
          reject(false)
        }
      }, 2000)
    })
  }

  loading_test2(email: string, passwd: string): Observable<boolean> {
    return new Observable((subscriber: Subscriber<boolean>) => {
      let i = 0
      const interval = setInterval(() => {
        i++
        if (i === 2) {
          if (email === "e@e.e" && passwd === "1111") {
            subscriber.next(true)
            subscriber.complete()
          } else {
            subscriber.error(false)
          }
        }
      }, 1000)
    })
  }

  constructor() { }
}
