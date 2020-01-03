import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: '', redirectTo: 'login', pathMatch: 'full' },
{ path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
{
	path: 'login',
	loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
},
  {
    path: 'purpose',
    loadChildren: () => import('./page/purpose/purpose.module').then( m => m.PurposePageModule)
  },
  {
    path: 'scan-code',
    loadChildren: () => import('./page/scan-code/scan-code.module').then( m => m.ScanCodePageModule)
  },
  {
    path: 'confirm-sign',
    loadChildren: () => import('./page/confirm-sign/confirm-sign.module').then( m => m.ConfirmSignPageModule)
  },
  {
    path: 'thanks-for-sign',
    loadChildren: () => import('./page/thanks-for-sign/thanks-for-sign.module').then( m => m.ThanksForSignPageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./page/camera/camera.module').then( m => m.CameraPageModule)
  },
  {
    path: 'work-with-child',
    loadChildren: () => import('./page/work-with-child/work-with-child.module').then( m => m.WorkWithChildPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./page/info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'contract',
    loadChildren: () => import('./page/contract/contract.module').then( m => m.ContractPageModule)
  },
  {
    path: 'ty-enjoyday',
    loadChildren: () => import('./page/ty-enjoyday/ty-enjoyday.module').then( m => m.TyEnjoydayPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./page/logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'yourname',
    loadChildren: () => import('./page/yourname/yourname.module').then( m => m.YournamePageModule)
  },
  {
    path: 'name',
    loadChildren: () => import('./page/name/name.module').then( m => m.NamePageModule)
  },
  {
    path: 'where',
    loadChildren: () => import('./page/where/where.module').then( m => m.WherePageModule)
  },
];

@NgModule({
	imports: [
	RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
