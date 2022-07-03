import { Component, OnInit } from '@angular/core';
import { SchoolMonitorService } from 'src/app/shared/monitors/school-monitor.service';
import { SchoolService } from 'src/app/shared/service/school.service';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss'],
})
export class DashboardMainComponent implements OnInit {
  constructor(
    private schoolMonitor: SchoolMonitorService,
    private schoolService: SchoolService
  ) {}

  ngOnInit(): void {

  }
}
