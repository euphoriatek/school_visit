import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';

import { IonicModule } from '@ionic/angular';

import { CameraPageRoutingModule } from './camera-routing.module';

import { CameraPage } from './camera.page';

@NgModule({
	imports: [
	CommonModule,
	FormsModule,
	IonicModule,
	CameraPageRoutingModule,
	IonicStorageModule.forRoot()
	],
	declarations: [CameraPage]
})
export class CameraPageModule {}
