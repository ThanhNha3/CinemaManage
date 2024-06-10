import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbDatepickerModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbMenuModule,
  NbSelectModule,
  NbTimepickerModule,
} from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PaginatorModule } from '../@theme/components/paginator/paginator.module';
import { ScreeningComponent } from './screening/screening.component';
import { ScreeningListComponent } from './screening/screening-list/screening-list.component';
import { ScreeningAddComponent } from './screening/screening-add/screening-add.component';
import { ScreeningEditComponent } from './screening/screening-edit/screening-edit.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { ListRoomComponent } from './room/list-room/list-room.component';
import { RoomComponent } from './room/room.component';
import { EditRoomComponent } from './room/edit-room/edit-room.component';
import { AddRoomComponent } from './room/add-room/add-room.component';
import { TicketComponent } from './ticket/ticket.component';
import { AddTicketComponent } from './ticket/add-ticket/add-ticket.component';
import { EditTicketComponent } from './ticket/edit-ticket/edit-ticket.component';
import { ListTicketComponent } from './ticket/list-ticket/list-ticket.component';
import { RevenueComponent } from './revenue/revenue.component';
import { AddRevenueComponent } from './revenue/addRevenue/addRevenue.component';
import { EditRevenueComponent } from './revenue/editRevenue/editRevenue.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieComponent } from './movie/movie.component';
import { GenreComponent } from './genre/genre.component';
import { GenreAddComponent } from './genre/genre-add/genre-add.component';
import { GenreEditComponent } from './genre/genre-edit/genre-edit.component';
import { MovieAddComponent } from './movie/movie-add/movie-add.component';
import { MovieEditComponent } from './movie/movie-edit/movie-edit.component';
import { NbMomentDateModule } from '@nebular/moment';
@NgModule({
  imports: [
    ReactiveFormsModule,
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    NbMenuModule,
    PaginatorModule,
    NbButtonModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbSelectModule,
    NbFormFieldModule,
    NbMomentDateModule,
    NbDatepickerModule,
    NbTimepickerModule,
  ],
  declarations: [
    PagesComponent,
    RevenueComponent,
    AddRevenueComponent,
    EditRevenueComponent,
    ScreeningComponent,
    ScreeningListComponent,
    ScreeningAddComponent,
    ScreeningEditComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeAddComponent,
    EmployeeEditComponent,
    RoomComponent,
    ListRoomComponent,
    EditRoomComponent,
    AddRoomComponent,
    TicketComponent,
    AddTicketComponent,
    EditTicketComponent,
    ListTicketComponent,
    GenreComponent,
    GenreAddComponent,
    GenreEditComponent,
    MovieComponent,
    MovieAddComponent,
    MovieEditComponent,
  ],
  providers: [],
})
export class PagesModule {}
