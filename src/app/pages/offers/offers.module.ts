import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersRoutingModule } from './offers-routing.module';
import { OffersComponent } from './offers.component';
// import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MAT_RADIO_DEFAULT_OPTIONS, MatRadioModule} from "@angular/material/radio";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";
import {AppModule} from "../../app.module";
import {OfferCardPipe} from "../../pipes/offer-card.pipe";
import {MatListModule} from "@angular/material/list";


@NgModule({
    declarations: [
        OffersComponent,
        OfferCardPipe
    ],
    imports: [
        CommonModule,
        OffersRoutingModule,
        // MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatDividerModule,
        MatRadioModule,
        FormsModule,
        MatProgressBarModule,
        MatSelectModule,
        MatCardModule,
        MatListModule,
        // AppModule
    ],
    exports: [
        OfferCardPipe
    ],
    providers: [{
        provide: MAT_RADIO_DEFAULT_OPTIONS,
        useValue: {color: 'primary'},
    }]
})
export class OffersModule { }
