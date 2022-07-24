import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EarningWidgetComponent } from './component/earning-widget/earning-widget.component';
import { NgChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [EarningWidgetComponent],
  imports: [CommonModule, NgChartsModule, SharedModule],
  exports: [EarningWidgetComponent],
})
export class WidgetModule {}
