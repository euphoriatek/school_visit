import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';
import { IonicModule } from '@ionic/angular';

import { NamePageRoutingModule } from './name-routing.module';

import { NamePage } from './name.page';

@NgModule({
	imports: [
	CommonModule,
	FormsModule,
	IonicModule,
	NamePageRoutingModule,
	IonicStorageModule.forRoot()
	],
	declarations: [NamePage]
})
export class NamePageModule {}
