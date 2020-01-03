import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThanksForSignPageRoutingModule } from './thanks-for-sign-routing.module';

import { ThanksForSignPage } from './thanks-for-sign.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThanksForSignPageRoutingModule
  ],
  declarations: [ThanksForSignPage]
})
export class ThanksForSignPageModule {}
