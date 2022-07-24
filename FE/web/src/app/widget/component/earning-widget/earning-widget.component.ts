import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { Subscription } from 'rxjs';
import { EarningWidgetService } from 'src/app/widget/service/earning-widget.service';
import { School } from 'src/app/shared/interface/school';
import { SchoolMonitorService } from 'src/app/shared/monitors/school-monitor.service';
import { EarningWidget } from '../../interface/earning-widget';

@Component({
  selector: 'app-earning-widget',
  templateUrl: './earning-widget.component.html',
  styleUrls: ['./earning-widget.component.scss'],
})
export class EarningWidgetComponent implements OnInit {
  widget: EarningWidget = {
    pending: 0,
    recieved: 0,
    total: 0,
    labels: [],
    series: [],
  };

  chart: ChartConfiguration | null = null;
  isChartLoaded: boolean = false;
  subs: Subscription[] = [];

  constructor(
    private earningWidgetService: EarningWidgetService,
    private schoolMonitorService: SchoolMonitorService
  ) {}

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }

  loadEarningChartDetails(school: School) {
    this.earningWidgetService.getEarningReport(school).subscribe({
      next: (earningWidget: EarningWidget) => {
        this.widget = earningWidget;
        this.chart = {
          type: 'bar',
          plugins: [],
          data: {
            labels: this.widget.labels,
            datasets: [
              {
                data: this.widget.series,
                label: 'Earning Report',
              },
            ],
          },
          options: {
            responsive: true,
          },
        };
        this.isChartLoaded = true;
      },
    });
  }

  ngOnInit(): void {
    this.subs.push(
      this.schoolMonitorService.activeSchool.subscribe({
        next: (school: School) => {
          this.loadEarningChartDetails(school);
        },
      })
    );
  }
}
