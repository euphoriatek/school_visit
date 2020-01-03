import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThanksForSignPage } from './thanks-for-sign.page';

const routes: Routes = [
{
	path: '',
	component: ThanksForSignPage
}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ThanksForSignPageRoutingModule {}
