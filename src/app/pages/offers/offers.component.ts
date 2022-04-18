import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";

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

  constructor() { }

  ngOnInit(): void {
  }

  request_offers() {
    console.log(this.form_personal.value)
    console.log(this.form_car.value)
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
