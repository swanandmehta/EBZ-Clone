import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { School } from '../interface/school';
import { SchoolMonitorService } from '../monitors/school-monitor.service';
import { SharedModule } from '../shared.module';

@Injectable({
  providedIn: SharedModule,
})
export class SchoolService {
  constructor(
    private httpClient: HttpClient,
    private monitor: SchoolMonitorService
  ) {}

  loadSchoolByUserId(userId: string): void {
    this.httpClient
      .get<School>(environment.server.url + '/user/' + userId + '/school')
      .subscribe({
        next: (school: School) => {
          this.monitor.school = school;
        },
        error: () => {
          //TODO: Handle error
        },
      });
  }
}
