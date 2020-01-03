import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Storage } from '@ionic/storage';
import { CommonService } from '../../services/common.service';


@Component({
	selector: 'app-camera',
	templateUrl: './camera.page.html',
	styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

	base64Image:any ='';
	imagefData:any;
	TIME_IN_MS = 2000; 
	constructor(private camera: Camera,private storage: Storage,public common:CommonService) {
		
		let ref = this;
		this.common.presentLoading();

		//let hideFooterTimeout =
		setTimeout(()=>{
			
			const options: CameraOptions = {
				quality: 100,
				destinationType: this.camera.DestinationType.DATA_URL,
				encodingType: this.camera.EncodingType.JPEG,
				mediaType: this.camera.MediaType.PICTURE
			}
			this.camera.getPicture(options).then((imageData) => {
				// imageData is either a base64 encoded string or a file URI
				// If it's base64 (DATA_URL):
				let base64Image = 'data:image/jpeg;base64,' + imageData;
				this.imagefData= base64Image;
				this.storage.set('userImage', this.imagefData);
			}, (err) => {
				// Handle error
			});
		},this.TIME_IN_MS)

	}


	ngOnInit() {
	}



	open(){

		debugger;
		const options: CameraOptions = {
			quality: 100,
			destinationType: this.camera.DestinationType.DATA_URL,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE
		}

		this.camera.getPicture(options).then((imageData) => {
			// imageData is either a base64 encoded string or a file URI
			// If it's base64 (DATA_URL):
			let base64Image = 'data:image/jpeg;base64,' + imageData;
			this.imagefData= base64Image;
			this.storage.set('userImage', this.imagefData);
		}, (err) => {
			// Handle error
		});

	}



}
