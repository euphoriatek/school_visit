import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TyEnjoydayPageRoutingModule } from './ty-enjoyday-routing.module';

import { TyEnjoydayPage } from './ty-enjoyday.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TyEnjoydayPageRoutingModule
  ],
  declarations: [TyEnjoydayPage]
})
export class TyEnjoydayPageModule {}
