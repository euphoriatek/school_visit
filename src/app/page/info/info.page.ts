import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { QRCodeModule} from 'angularx-qrcode';
import QRCode from 'qrcodejs2/qrcode.js';
import { CommonService } from '../../services/common.service';


@Component({
	selector: 'app-info',
	templateUrl: './info.page.html',
	styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

	userImageData:any;

	public created_code= null;
	private qr_data = {
		"amount": "",
		"account": "",
		"currency": ""
	}

	private userCodeData = null;
	constructor(public storage:Storage, public common:CommonService) {

		let ref = this;
		this.common.presentLoading();

		this.qr_data.account = 'hsynterkr';
		this.qr_data.currency = 'USD';
		this.qr_data.amount = '25';
		//this.created_code = this.Qrvalue;
		this.created_code  = JSON.stringify(this.qr_data);
	}

	ngOnInit() {

		this.storage.get('userImage').then((val) => {
			console.log('userImage', val);
			this.userImageData=val;
		});


		


	}

}
