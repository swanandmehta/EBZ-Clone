import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardMainComponent } from './component/dashboard-main/dashboard-main.component';
import { HomeComponent } from './component/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { NavigationModule } from '../navigation/navigation.module';

@NgModule({
  declarations: [DashboardMainComponent, HomeComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NavigationModule,
  ],
})
export class DashboardModule {}
