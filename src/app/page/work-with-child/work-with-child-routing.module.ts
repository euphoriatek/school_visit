import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkWithChildPage } from './work-with-child.page';

const routes: Routes = [
  {
    path: '',
    component: WorkWithChildPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkWithChildPageRoutingModule {}
