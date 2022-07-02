import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationType } from 'src/app/shared/enums/notification-type';
import { NotificationService } from 'src/app/shared/service/notification.service';
import { TranslationService } from 'src/app/shared/service/translation.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordFormGroup: FormGroup;

  constructor(fb: FormBuilder, private translationService: TranslationService, private notificationService: NotificationService) {
    this.resetPasswordFormGroup = fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {}

  resetPassword(): void {
    console.log(this.resetPasswordFormGroup)
    let title: string = this.translationService.translate('auth.resetPassword.feedback.info.title');
    let message: string = this.translationService.translate('auth.resetPassword.feedback.info.message');

    this.notificationService.notify(title, message, NotificationType.Info)

  }
}
