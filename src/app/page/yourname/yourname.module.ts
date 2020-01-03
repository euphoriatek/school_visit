import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YournamePageRoutingModule } from './yourname-routing.module';

import { YournamePage } from './yourname.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YournamePageRoutingModule
  ],
  declarations: [YournamePage]
})
export class YournamePageModule {}
