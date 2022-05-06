import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyContractsRoutingModule } from './my-contracts-routing.module';
import { MyContractsComponent } from './my-contracts.component';


@NgModule({
  declarations: [
    MyContractsComponent
  ],
  imports: [
    CommonModule,
    MyContractsRoutingModule
  ]
})
export class MyContractsModule { }
