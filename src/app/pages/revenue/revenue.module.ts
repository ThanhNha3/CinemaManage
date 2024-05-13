import { NgModule } from '@angular/core';
import {RevenueComponent} from './revenue.component';
import {BreadcrumbModule} from "xng-breadcrumb";
@NgModule({
  imports: [
    BreadcrumbModule
  ],
  declarations: [
    RevenueComponent
  ],
})
export class RevenueModule { }
