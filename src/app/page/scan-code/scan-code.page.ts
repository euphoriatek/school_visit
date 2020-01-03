import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Platform } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { QRCodeModule} from 'angularx-qrcode';
// import QRCode from 'angularx-qrcode';
import QRCode from 'qrcodejs2/qrcode.js';
import { Router ,ActivatedRoute,NavigationExtras} from '@angular/router';


import { NgxQRCodeModule } from 'ngx-qrcode2';
@Component({
	selector: 'app-scan-code',
	templateUrl: './scan-code.page.html',
	styleUrls: ['./scan-code.page.scss'],
})
export class ScanCodePage implements OnInit {

	scanning:any;
	Qrvalue: any;
	private created_code= null;
	private qr_data = {
		"amount": "",
		"account": "",
		"currency": ""
	}
	constructor(private qrScanner: QRScanner,public platform:Platform,public navCtrl: NavController, public router:Router) {

	}
	createCode() {
		this.qr_data.account = 'hsynterkr';
		this.qr_data.currency = 'USD';
		this.qr_data.amount = '25';
		//this.created_code = this.Qrvalue;
		this.created_code  = JSON.stringify(this.qr_data);

		//this.storage.set('userCode', this.created_code);
	}

	scanQRCode(){
		this.qrScanner.prepare().then((status: QRScannerStatus) => {
			if (status.authorized) {
				// camera permission was granted
				this.qrScanner.show();
				document.getElementsByTagName("body")[0].style.opacity ="0";

				// start scanning
				this.scanning = this.qrScanner.scan().subscribe((textFound) => {
					console.log('Scanned something', textFound);
					document.getElementsByTagName("body")[0].style.opacity = "1";
					this.scanning.unsubscribe();
					console.log(textFound);
					alert(textFound);

					this.Qrvalue = textFound;

					this.router.navigateByUrl('/ty-enjoyday');

				}, (err)=>{
				})

			}
			//this.qrScanner.hide(); // hide camera preview
			//scanSub.unsubscribe(); // stop scanning	

			else if(status.denied){
				// camera permission was permanently denied
				// you must use QRScanner.openSettings() method to guide the user to the settings page
				// then they can grant the permission from there
			} 
			else{

			}
		});
		//.catch((e: any) => console.log('Error is', e));
	}


	ngOnInit() {
	}




}
