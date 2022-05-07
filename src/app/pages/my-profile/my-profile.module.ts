import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyProfileRoutingModule } from './my-profile-routing.module';
import { MyProfileComponent } from './my-profile.component';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { AppModule } from "../../app.module";
import { MyProfilePipe } from '../../pipes/my-profile.pipe';
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
      MyProfileComponent,
      MyProfilePipe
  ],
    imports: [
        CommonModule,
        MyProfileRoutingModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        ReactiveFormsModule,
        FormsModule,
        MatInputModule,
        MatButtonModule,
        MatDividerModule,
        MatCardModule,
        // AppModule
    ]
})
export class MyProfileModule { }
