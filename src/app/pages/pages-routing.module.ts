import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RevenueComponent } from './revenue/revenue.component';
import { AddRevenueComponent } from './revenue/addRevenue/addRevenue.component';
import { EditRevenueComponent } from './revenue/editRevenue/editRevenue.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { breadcrumb: 'Dashboard' },
      },
      {
        path: 'revenue',
        component: RevenueComponent,
        data: { breadcrumb: 'Quản lí doanh thu' },
      },
      {
        path: 'revenue/add',
        component: AddRevenueComponent,
        data: { breadcrumb: 'Quản lí doanh thu' },
      },
      {
        path: 'revenue/edit/:id',
        component: EditRevenueComponent,
        data: { breadcrumb: 'Quản lí doanh thu' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
