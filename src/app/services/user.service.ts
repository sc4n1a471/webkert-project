import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {User} from "../models/User";
import {Contract} from "../models/Offer";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    collectionName = "Users";

    constructor(private angularFirestore: AngularFirestore) { }

    createUser(newUser: User) {
        return this.angularFirestore
            .collection<User>(this.collectionName)
            .doc(newUser.id)
            .set(newUser)   // mit töltünk fel
    }

    getUserById(id: string) {
        return this.angularFirestore
            .collection<User>(this.collectionName)
            .doc(id)
            .valueChanges();
    }

    updateEmail(user: User) {
        return this.angularFirestore
            .collection<User>(this.collectionName)
            .doc(user.id)
            .set(user);
    }
}
