import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkWithChildPageRoutingModule } from './work-with-child-routing.module';

import { WorkWithChildPage } from './work-with-child.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkWithChildPageRoutingModule
  ],
  declarations: [WorkWithChildPage]
})
export class WorkWithChildPageModule {}
