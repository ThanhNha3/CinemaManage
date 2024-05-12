import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RevenueComponent } from './revenue/revenue.component';
import { AddRevenueComponent } from './revenue/addRevenue/addRevenue.component';
import { EditRevenueComponent } from './revenue/editRevenue/editRevenue.component';
import { CategoryComponent } from './category/category.component';
import { AddComponent } from './category/add/add.component';
import { EditComponent } from './category/edit/edit.component';
import { DeleteComponent } from './category/delete/delete.component';
import { FlimComponent } from './flim/flim.component';
import { AddflimComponent } from './flim/addflim/addflim.component';
import { EditfilmComponent } from './flim/editfilm/editfilm.component';
import { DeletefilmComponent } from './flim/deletefilm/deletefilm.component';

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
      {
        path: 'cate',
        component: CategoryComponent,
        data: { breadcrumb: 'category' },
      },
      {
        path: 'cate/add',
        component: AddComponent,
        data: { breadcrumb: 'category' },
      },
      {
        path: 'cate/edit',
        component: EditComponent,
        data: { breadcrumb: 'category' },
      },
      {
        path: 'cate/delete',
        component: DeleteComponent,
        data: { breadcrumb: 'category' },
      },
      {
        path: 'film',
        component: FlimComponent,
        data: { breadcrumb: 'film' },
      },
      {
        path: 'film/add',
        component: AddflimComponent,
        data: { breadcrumb: 'film' },
      },
      {
        path: 'film/edit',
        component: EditfilmComponent,
        data: { breadcrumb: 'film' },
      },
      {
        path: 'film/delete',
        component: DeletefilmComponent,
        data: { breadcrumb: 'film' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
