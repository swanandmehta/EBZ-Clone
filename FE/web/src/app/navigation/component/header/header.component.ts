import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { School } from 'src/app/shared/interface/school';
import { SchoolMonitorService } from 'src/app/shared/monitors/school-monitor.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  school: School = {
    id: '',
    name: '',
  };

  private subList: Subscription[] = [];

  constructor(private schoolMonitor: SchoolMonitorService) {
    this.initalizeSchoolMonitor();
  }

  initalizeSchoolMonitor() {
    this.subList.push(
      this.schoolMonitor.activeSchool.subscribe({
        next: (school: School) => {
          this.school = school;
        },
      })
    );
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subList.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
