import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'home-total-revision-needed', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'display', loadChildren: () => import('./display/display.module').then(m => m.DisplayModule) },
  { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
