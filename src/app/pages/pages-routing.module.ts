import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RevenueComponent } from './revenue/revenue.component';
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
import { MovieComponent } from './movie/movie.component';
import { MovieAddComponent } from './movie/movie-add/movie-add.component';
import { MovieEditComponent } from './movie/movie-edit/movie-edit.component';
import { GenreComponent } from './genre/genre.component';
import { GenreAddComponent } from './genre/genre-add/genre-add.component';
import { GenreEditComponent } from './genre/genre-edit/genre-edit.component';
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
        data: { breadcrumb: 'Doanh thu' },
        // children: [
        //   {
        //     path: '/',
        //     component: AddRevenueComponent,
        //     data: { breadcrumb: 'Chart' },
        //   },
        // ],
      },
      {
        path: 'screening',
        data: { breadcrumb: 'Suất chiếu' },
        children: [
          {
            path: '',
            component: ScreeningComponent,
          },
          {
            path: 'add',
            component: ScreeningAddComponent,
            data: { breadcrumb: 'Thêm mới' },
          },
          {
            path: 'edit/:id',
            component: ScreeningEditComponent,
            data: { breadcrumb: 'Chỉnh sửa' },
          },
        ],
      },
      {
        path: 'employee',
        data: { breadcrumb: 'Nhân viên' },
        children: [
          {
            path: '',
            component: EmployeeComponent,
          },
          {
            path: 'add',
            component: EmployeeAddComponent,
            data: { breadcrumb: 'Thêm mới' },
          },
          {
            path: 'edit/:id',
            component: EmployeeEditComponent,
            data: { breadcrumb: 'Chỉnh sửa' },
          },
        ],
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
            path: 'add',
            component: AddRoomComponent,
            data: { breadcrumb: 'Thêm mới' },
          },
          {
            path: 'edit/:id',
            component: EditRoomComponent,
            data: { breadcrumb: 'Chỉnh sửa' },
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
            path: 'add',
            component: AddTicketComponent,
            data: { breadcrumb: 'Thêm mới' },
          },
          {
            path: 'edit/:id',
            component: EditTicketComponent,
            data: { breadcrumb: 'Chỉnh sửa' },
          },
        ],
      },
      {
        path: 'genre',
        data: { breadcrumb: 'Thể loại' },
        children: [
          {
            path: '',
            component: GenreComponent,
          },
          {
            path: 'add',
            component: GenreAddComponent,
            data: { breadcrumb: 'Thêm mới' },
          },
          {
            path: 'edit/:id',
            component: GenreEditComponent,
            data: { breadcrumb: 'Chỉnh sửa' },
          },
        ],
      },
      {
        path: 'movie',
        data: { breadcrumb: 'Phim' },
        children: [
          {
            path: '',
            component: MovieComponent,
          },
          {
            path: 'add',
            component: MovieAddComponent,
            data: { breadcrumb: 'Thêm mới' },
          },
          {
            path: 'edit/:id',
            component: MovieEditComponent,
            data: { breadcrumb: 'Chỉnh sửa' },
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
