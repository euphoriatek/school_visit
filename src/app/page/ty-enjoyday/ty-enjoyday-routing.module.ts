import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TyEnjoydayPage } from './ty-enjoyday.page';

const routes: Routes = [
  {
    path: '',
    component: TyEnjoydayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TyEnjoydayPageRoutingModule {}
