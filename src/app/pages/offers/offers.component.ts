import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Offer, Offer_fees} from "../../models/Offer";
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

@Component({
    selector: 'app-offers',
    templateUrl: './offers.component.html',
    styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

    form_personal = new FormGroup( {
        jogsi_meglet: new FormControl('', Validators.required),
        jogsi_elvetelek: new FormControl('', Validators.required),
        balesetek_szama: new FormControl('', Validators.required),
        varos: new FormControl('', Validators.required)
    })

    form_car = new FormGroup( {
        type: new FormControl('', Validators.required),
        year: new FormControl('', Validators.required),
        condition: new FormControl('', Validators.required),
        value: new FormControl('', Validators.required),
        weight: new FormControl('', Validators.required),
        brand: new FormControl('', Validators.required),
        model: new FormControl('', Validators.required),
        performance: new FormControl('', Validators.required)
    })

    // newOrUsed: string | undefined
    // progressBarValue = 0
    errorInForm = false;
    offer?: Offer
    offers?: Array<Offer>;
    offers_ready = false
    sumLenni = false

    fees1?: Offer_fees;
    fees2?: Offer_fees;
    fees3?: Offer_fees;
    feeMultipliers1 = [20000, 40000, 30000, 10, 1000, 100]
    feeMultipliers2 = [21000, 41000, 31000, 11, 1100, 110]
    feeMultipliers3 = [19000, 39000, 29000, 9, 900, 90]
    fees: Array<Offer_fees> = [];

    constructor() { }

    ngOnInit(): void {
    }

    request_offers() {
        console.log("form_personal: ", this.form_personal.value)
        console.log("form_car: ", this.form_car.value)

        // let yearly = 0
        this.calculator(0)

        // let yearly = 1000

        let obj1 = new Offer(this.fees[0], "Allianz Hungária Biztosító", "../../../assets/logos/allianz.png")
        let obj2 = new Offer(this.fees[1],"Aegon Biztosító", "../../../assets/logos/aegon.png")
        let obj3 = new Offer(this.fees[2],"K&H Bank", "../../../assets/logos/kh.png")

        // console.log("offer: ", this.offer)

        // console.log("obj1: ", obj1)
        // console.log("obj2: ", obj2)
        // console.log("obj3: ", obj3)

        // this.offer_cuccli(obj1)
        // this.offer_cuccli(obj2)
        // this.offer_cuccli(obj3)

        this.offers = [obj1, obj2, obj3]

        // this.offers?.push(obj1)
        // this.offers?.push(obj2)
        // this.offers?.push(obj3)

        console.log(this.offers)
        this.offers_ready = true
    }

    // offer_cuccli(ezLenniOffer: Offer) {
    //   console.log("ezLenniOffer: ", ezLenniOffer)
    //
    // }

    calculator(dij: number) {
        let personal = this.form_personal.value
        let car = this.form_car.value

        let typeFee: number;
        let ageFee: number;

        switch (car.type) {
            case "car": {
                typeFee = 20000;
                break;
            }
            case "truck": {
                typeFee= 70000;
                break;
            }
            case "bike": {
                typeFee = 10000;
                break;
            }
            default: {
                typeFee = 999999999;
                console.error("miért nincs megadva autó típus???")
                break;
            }
        }

        let evjarat = (((car.year) as String).split("-"))[0]
        // console.log(evjarat)
        let dateTime = new Date()
        // console.log(dateTime.getFullYear())
        // console.log(((dateTime.getFullYear() as number) - (evjarat as unknown as number)))
        let kor = ((dateTime.getFullYear() as number) - (evjarat as unknown as number))
        if (kor > 0) {
            ageFee = ((1 / kor) * 10000)
        } else {
            ageFee = 5000
        }

        this.fees1 = new Offer_fees(
            Math.ceil(personal.balesetek_szama * this.feeMultipliers1[0]),
            Math.ceil(personal.jogsi_elvetelek * this.feeMultipliers1[1]),
            Math.ceil((1 / personal.jogsi_meglet) * this.feeMultipliers1[2]),
            Math.ceil(typeFee),
            Math.ceil(car.weight * this.feeMultipliers1[3]),
            Math.ceil((car.value / this.feeMultipliers1[4]) * 2),
            Math.ceil(ageFee),
            Math.ceil(car.performance * this.feeMultipliers1[5])
        )
        this.fees2 = new Offer_fees(
            Math.ceil(personal.balesetek_szama * this.feeMultipliers2[0]),
            Math.ceil(personal.jogsi_elvetelek * this.feeMultipliers2[1]),
            Math.ceil((1 / personal.jogsi_meglet) * this.feeMultipliers2[2]),
            Math.ceil(typeFee),
            Math.ceil(car.weight * this.feeMultipliers2[3]),
            Math.ceil((car.value / this.feeMultipliers2[4]) * 2),
            Math.ceil(ageFee),
            Math.ceil(car.performance * this.feeMultipliers2[5])
        )
        this.fees3 = new Offer_fees(
            Math.ceil(personal.balesetek_szama * this.feeMultipliers3[0]),
            Math.ceil(personal.jogsi_elvetelek * this.feeMultipliers3[1]),
            Math.ceil((1 / personal.jogsi_meglet) * this.feeMultipliers3[2]),
            Math.ceil(typeFee),
            Math.ceil(car.weight * this.feeMultipliers3[3]),
            Math.ceil((car.value / this.feeMultipliers3[4]) * 2),
            Math.ceil(ageFee),
            Math.ceil(car.performance * this.feeMultipliers3[5])
        )

        this.fees = [this.fees1, this.fees2, this.fees3]
        // this.fees = [this.fees3]

        // return Math.ceil(dij);
    }

    // updateProgressBar() {
    //   this.progressBarValue += 10
    //   console.log("progress bar value: ", this.progressBarValue)
    // }

    // problem() {
    //   if (this.form_personal.get('balesetek_szama').hasError('required')) {
    //     this.errorInForm = true;
    //     console.log(this.errorInForm)
    //   }
    // }
}
