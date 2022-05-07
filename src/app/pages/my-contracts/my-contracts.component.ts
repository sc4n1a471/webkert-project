import { Component, OnInit } from '@angular/core';
import {ContractService} from "../../services/contract.service";
import {Contract, Offer} from "../../models/Offer";

@Component({
    selector: 'app-my-contracts',
    templateUrl: './my-contracts.component.html',
    styleUrls: ['./my-contracts.component.css']
})
export class MyContractsComponent implements OnInit {

    loading: boolean = false

    myContracts: any;
    displayedColumns = ['id', 'date', 'yearly', 'logoOfCompany', 'other', 'actions'];

    panelOpenState = false;

    constructor(private contractService: ContractService) { }

    ngOnInit(): void {
        this.loading = true;
        console.log(this.loading)
        const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
        this.contractService.getContractsById(user.uid).subscribe(data => {
            this.myContracts = data;
            console.log(user)
            console.log("My contracts: ", this.myContracts)
            // console.log(this.myContracts[0].id)
            this.loading = false
            console.log(this.loading)
        }, error => {
            console.error("My contracts - ngOnInit - getContractsById: ", error)
        })
    }

    cancel(contract: Contract) {
        console.log("Cancelled contract: ", contract)
        this.contractService.cancelContract(contract.id).then(_ => {
            console.log("Contract with ID ", contract.id, " is cancelled succesfully!")
        }).catch(error => {
            console.error(error)
        })
    }
}
