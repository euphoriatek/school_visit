import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { NavController } from '@ionic/angular';



@Component({
	selector: 'app-thanks-for-sign',
	templateUrl: './thanks-for-sign.page.html',
	styleUrls: ['./thanks-for-sign.page.scss'],
})
export class ThanksForSignPage implements OnInit {

	constructor(public navCtrl: NavController,  public router: Router) { 

		setTimeout(()=>{
			this.router.navigateByUrl('/info');
		},1000)

	}

	ngOnInit() {
	}

}
