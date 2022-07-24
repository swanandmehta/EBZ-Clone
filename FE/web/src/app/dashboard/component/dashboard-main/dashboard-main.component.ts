import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageKey } from 'src/app/shared/enums/storage-key';
import { SchoolMonitorService } from 'src/app/shared/monitors/school-monitor.service';
import { SchoolService } from 'src/app/shared/service/school.service';
import { SessionService } from 'src/app/shared/service/session.service';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss'],
})
export class DashboardMainComponent implements OnInit {
  constructor(
    private schoolService: SchoolService,
    private userService: UserService,
    private sessionService: SessionService,
    private router: Router
  ) {
    const userId: string | null = this.sessionService.getItem(
      StorageKey.USERID
    );
    if (userId) {
      this.userService.loadUserById(userId);
      this.schoolService.loadSchoolByUserId(userId);
    } else {
      this.router.navigateByUrl('');
    }
  }

  ngOnInit(): void {}
}
