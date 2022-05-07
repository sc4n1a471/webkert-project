 import { Injectable } from '@angular/core';
 import {AngularFirestore} from "@angular/fire/compat/firestore";
 import {Contract} from "../models/Offer";

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

}
