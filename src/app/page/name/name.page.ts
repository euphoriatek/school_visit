import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
	selector: 'app-name',
	templateUrl: './name.page.html',
	styleUrls: ['./name.page.scss'],
})
export class NamePage implements OnInit {
	userName:any;
	constructor( private storage: Storage) { 


		this.storage.set('userDataName', this.userName);

	}



	



	ngOnInit() {
	}

}
