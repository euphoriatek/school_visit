import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WherePageRoutingModule } from './where-routing.module';

import { WherePage } from './where.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WherePageRoutingModule
  ],
  declarations: [WherePage]
})
export class WherePageModule {}
