import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YournamePage } from './yourname.page';

const routes: Routes = [
  {
    path: '',
    component: YournamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YournamePageRoutingModule {}
