import { NgModule } from '@angular/core';
import { RevenueComponent } from './revenue.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [BreadcrumbModule,RouterModule,RouterLink],
  declarations: [RevenueComponent],
})
export class RevenueModule {}
