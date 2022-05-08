import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Contract, Offer, Offer_fees} from "../../models/Offer";
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {ContractService} from "../../services/contract.service";
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
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
        license_plate: new FormControl('', Validators.required),
        performance: new FormControl('', Validators.required)
    })

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

    user?: User;

    constructor(
        private offerService: ContractService,
        private userService: UserService,
        private _snackBar: MatSnackBar,
        private router: Router
    ) { }

    ngOnInit(): void {
        const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
        this.userService.getUserById(user.uid).subscribe(data => {
            this.user = data;
            // this.contract.userId = <string>this.user?.id
        }, error => {
            console.error("offers.ts - ngOnInit - userService.getUserById error: ", error)
        })
    }

    request_offers() {

        this.calculator(0)

        let obj1 = new Offer(this.fees[0], "Allianz Hungária Biztosító", "../../../assets/logos/allianz.png")
        let obj2 = new Offer(this.fees[1],"Aegon Biztosító", "../../../assets/logos/aegon.png")
        let obj3 = new Offer(this.fees[2],"K&H Bank", "../../../assets/logos/kh.png")

        this.offers = [obj1, obj2, obj3]

        this.offers_ready = true
    }

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

        let dateTime = new Date()

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
    }

    // teszteléshez
    // testRequest() {
    //     let personal = this.form_personal.value
    //     let car = this.form_car.value
    //
    //     personal.jogsi_meglet = 3
    //     personal.jogsi_elvetelek = 0
    //     personal.balesetek_szama = 0
    //
    //     car.type = 'car'
    //     car.year = '2021-01-01'
    //     car.condition = 'new'
    //     car.value = 20000000
    //     car.weight = 1800
    //     car.performance = 300
    //     car.license_plate = "AAA111"
    //
    //     this.request_offers()
    // }

    choose(offer: Offer) {
        if (offer) {
            let contract: Contract = {
                id: '',
                date: new Date().toISOString().split('T')[0],
                userId: <string>this.user?.id,
                license_plate: this.form_car.value.license_plate.toUpperCase(),
                offer: offer
            };
            this.offerService.createOffer(contract)
            this.openSnackBar("Sikeres ajánlatválasztás!")
            this.router.navigateByUrl("my-contracts")
        } else {
            this.openSnackBar("Nincs ajánlat választva!")
        }
    }

    openSnackBar(message: string) {
        this._snackBar.open(message, "Bezár", {
            duration: 3000
        });
    }
}
