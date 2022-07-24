import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../interface/user';
import { UserMonitorService } from '../monitors/user-monitor.service';
import { SharedModule } from '../shared.module';

@Injectable({
  providedIn: SharedModule,
})
export class UserService {
  constructor(
    private httpClient: HttpClient,
    private monitor: UserMonitorService
  ) {}

  loadUserById(userId: string): void {
    this.loadUserInfo(userId);
  }

  private loadUserInfo(userId: string): void {
    this.httpClient
      .get<User>(environment.server.url + '/user/' + userId)
      .subscribe({
        next: (user: User) => {
          this.monitor.user = user;
        },
        error: () => {
          //TODO: Handle error
        },
      });
  }
}
