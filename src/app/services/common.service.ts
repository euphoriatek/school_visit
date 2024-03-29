import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
	providedIn: 'root'
})
export class CommonService {

	constructor(public loadingController: LoadingController) { }


	async presentLoading() {
		const loading = await this.loadingController.create({
			message: 'Please wait',
			duration: 3000
		});
		await loading.present();

		const { role, data } = await loading.onDidDismiss();

		console.log('Loading dismissed!');
	}

	async presentLoadingWithOptions() {
		const loading = await this.loadingController.create({
			spinner: null,
			duration: 5000,
			message: 'Please wait...',
			translucent: true,
			cssClass: 'custom-class custom-loading'
		});
		return await loading.present();
	}





}
