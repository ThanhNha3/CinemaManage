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

import {PagesComponent} from './pages.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {PagesRoutingModule} from './pages-routing.module';
import {PaginatorModule} from "../@theme/components/paginator/paginator.module";
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
    EditGiftComponent
  ],
  providers: [],
})
export class PagesModule {}
