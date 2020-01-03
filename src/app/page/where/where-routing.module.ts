import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WherePage } from './where.page';

const routes: Routes = [
  {
    path: '',
    component: WherePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WherePageRoutingModule {}
