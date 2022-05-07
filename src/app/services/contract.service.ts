import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Contract} from "../models/Offer";
import {User} from "../models/User";
import {user} from "@angular/fire/auth";

@Injectable({
    providedIn: 'root'
})
export class ContractService {

    collectionName = 'Contracts'

    constructor(private angularFirestore: AngularFirestore) { }

    createOffer(newContract: Contract) {

        newContract.id = this.angularFirestore.createId()

        return this.angularFirestore
            .collection<Contract>(this.collectionName)
            .doc(newContract.id)
            .set(JSON.parse( JSON.stringify(newContract)));
        // for some reason, csak így fogadja el a firestore a custom object típust 🤷‍
    }

    getContractsById(userId: string) {
        console.log("userId: ", userId)
        return this.angularFirestore
            .collection<Contract>(this.collectionName, ref =>
                ref.where('userId', '==', userId))
            .valueChanges();
    }

    cancelContract(id: string) {
        return this.angularFirestore
            .collection<Contract>(this.collectionName)
            .doc(id)
            .delete();
    }

}
