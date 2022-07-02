import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NotificationType } from '../enums/notification-type';
import { SharedModule } from '../shared.module';

@Injectable({
  providedIn: SharedModule,
})
export class NotificationService {
  constructor(private tosterService: ToastrService) {}

  notify(title: string, message: string, info: NotificationType) {
    switch (info) {
      case NotificationType.Info:
        this.tosterService.info(message, title);
        break;
      case NotificationType.Warning:
        this.tosterService.warning(message, title);
        break;
      case NotificationType.Success:
        this.tosterService.success(message, title);
        break;
      case NotificationType.Error:
        this.tosterService.error(message, title);
        break;
    }
  }
}
