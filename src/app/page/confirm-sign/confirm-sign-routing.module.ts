import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmSignPage } from './confirm-sign.page';

const routes: Routes = [
{
	path: '',
	component: ConfirmSignPage
}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ConfirmSignPageRoutingModule {}
