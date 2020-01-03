import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmSignPageRoutingModule } from './confirm-sign-routing.module';

import { ConfirmSignPage } from './confirm-sign.page';

@NgModule({
	imports: [
	CommonModule,
	FormsModule,
	IonicModule,
	ConfirmSignPageRoutingModule
	],
	declarations: [ConfirmSignPage]
})
export class ConfirmSignPageModule {}
