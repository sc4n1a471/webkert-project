import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyContractsRoutingModule } from './my-contracts-routing.module';
import { MyContractsComponent } from './my-contracts.component';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from "@angular/material/expansion";
import {OffersModule} from "../offers/offers.module";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    MyContractsComponent
  ],
    imports: [
        CommonModule,
        MyContractsRoutingModule,
        MatTableModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatExpansionModule,
        OffersModule,
        MatCardModule
    ]
})
export class MyContractsModule { }
