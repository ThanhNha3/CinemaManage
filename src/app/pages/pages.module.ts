import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbMenuModule,
  NbSelectModule,
} from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PaginatorModule } from '../@theme/components/paginator/paginator.module';
import { CategoryComponent } from './category/category.component';
import { ListComponent } from './category/list/list.component';
import { AddComponent } from './category/add/add.component';
import { EditComponent } from './category/edit/edit.component';
import { DeleteComponent } from './category/delete/delete.component';
import { FlimComponent } from './flim/flim.component';
import { ListComponentfilm } from './flim/list/list.component';
import { AddflimComponent } from './flim/addflim/addflim.component';
import { EditfilmComponent } from './flim/editfilm/editfilm.component';
import { DeletefilmComponent } from './flim/deletefilm/deletefilm.component';
import { GiftComponent } from './gift/gift.component';
import { AddGiftComponent } from './gift/add-gift/add-gift.component';
import { EditGiftComponent } from './gift/edit-gift/edit-gift.component';
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
@NgModule({
  imports: [
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
  ],
  declarations: [
    PagesComponent,
    RevenueComponent,
    AddRevenueComponent,
    EditRevenueComponent,
    CategoryComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
    FlimComponent,
    ListComponentfilm,
    AddflimComponent,
    EditfilmComponent,
    DeletefilmComponent,
    GiftComponent,
    AddGiftComponent,
    EditGiftComponent,
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
  ],
  providers: [],
})
export class PagesModule {}
