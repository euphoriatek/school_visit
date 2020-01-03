import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { InfoPageRoutingModule } from './info-routing.module';
import { NgxQRCodeModule } from 'ngx-qrcode2'; 
import { InfoPage } from './info.page';

@NgModule({
	imports: [
	CommonModule,
	FormsModule,
	IonicModule,
	InfoPageRoutingModule,
	NgxQRCodeModule ,
	IonicStorageModule.forRoot()
	],
	declarations: [InfoPage]
})
export class InfoPageModule {}
