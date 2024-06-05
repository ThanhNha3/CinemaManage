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
import { GiftComponent } from './gift/gift.component';
import { AddGiftComponent } from './gift/add-gift/add-gift.component';
import { EditGiftComponent } from './gift/edit-gift/edit-gift.component';
import { ScreeningComponent } from './screening/screening.component';
import { ScreeningAddComponent } from './screening/screening-add/screening-add.component';
import { ScreeningEditComponent } from './screening/screening-edit/screening-edit.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { RoomComponent } from './room/room.component';
import { EditRoomComponent } from './room/edit-room/edit-room.component';
import { AddRoomComponent } from './room/add-room/add-room.component';
import { EditTicketComponent } from './ticket/edit-ticket/edit-ticket.component';
import { AddTicketComponent } from './ticket/add-ticket/add-ticket.component';
import { TicketComponent } from './ticket/ticket.component';
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
        path: 'gift',
        component: GiftComponent,
        data: { breadcrumb: 'Quản lí quà tặng' },
      },
      {
        path: 'gift/add',
        component: AddGiftComponent,
        data: { breadcrumb: 'Quản lí quà tặng' },
      },
      {
        path: 'gift/edit/:id',
        component: EditGiftComponent,
        data: { breadcrumb: 'Quản lí quà tặng' },
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
      {
        path: 'screening',
        component: ScreeningComponent,
        data: { breadcrumb: 'Suất chiếu phim' },
      },
      {
        path: 'screening/add',
        component: ScreeningAddComponent,
        data: { breadcrumb: 'Thêm suất chiếu' },
      },
      {
        path: 'screening/edit',
        component: ScreeningEditComponent,
        data: { breadcrumb: 'Chỉnh sửa suất chiếu' },
      },
      {
        path: 'employee',
        component: EmployeeComponent,
        data: { breadcrumb: 'Nhân viên' },
      },
      {
        path: 'employee/add',
        component: EmployeeAddComponent,
        data: { breadcrumb: 'Thêm nhân viên' },
      },
      {
        path: 'employee/edit',
        component: EmployeeEditComponent,
        data: { breadcrumb: 'Chỉnh sửa thông tin nhân viên' },
      },
      {
        path: 'room',
        data: { breadcrumb: 'Phòng chiếu' },
        children: [
          {
            path: '',
            component: RoomComponent,
          },
          {
            path: 'edit/:id',
            component: EditRoomComponent,
            data: { breadcrumb: 'Chỉnh sửa' },
          },
          {
            path: 'add',
            component: AddRoomComponent,
            data: { breadcrumb: 'Thêm mới' },
          },
        ],
      },
      {
        path: 'ticket',
        data: { breadcrumb: 'Vé' },
        children: [
          {
            path: '',
            component: TicketComponent,
          },
          {
            path: 'edit/:id',
            component: EditTicketComponent,
            data: { breadcrumb: 'Chỉnh sửa' },
          },
          {
            path: 'add',
            component: AddTicketComponent,
            data: { breadcrumb: 'Thêm mới' },
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
