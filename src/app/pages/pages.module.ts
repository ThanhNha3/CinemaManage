import {NgModule} from '@angular/core';
import {NbMenuModule} from "@nebular/theme";
import {ThemeModule} from '../@theme/theme.module';

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

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    NbMenuModule,
    PaginatorModule,
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
    DeletefilmComponent
  ],
  providers: []
})
export class PagesModule { }
