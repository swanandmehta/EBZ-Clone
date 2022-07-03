import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationType } from 'src/app/shared/enums/notification-type';
import { AuthService } from 'src/app/shared/service/auth.service';
import { NotificationService } from 'src/app/shared/service/notification.service';
import { TranslationService } from 'src/app/shared/service/translation.service';
import { ResetPassword } from '../../interface/reset-password';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordFormGroup: FormGroup;

  constructor(
    fb: FormBuilder,
    private translationService: TranslationService,
    private notificationService: NotificationService,
    private authService: AuthService,
    private router: Router
  ) {
    this.resetPasswordFormGroup = fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {}

  resetPassword(): void {
    if (this.resetPasswordFormGroup.valid) {
      this.authService
        .resetPassword(this.resetPasswordFormGroup.value as ResetPassword)
        .subscribe({
          next: () => {
            let title: string = this.translationService.translate(
              'auth.resetPassword.feedback.info.title'
            );
            let message: string = this.translationService.translate(
              'auth.resetPassword.feedback.info.message'
            );
            this.notificationService.notify(
              title,
              message,
              NotificationType.Info
            );

            this.router.navigateByUrl('auth/login');
          },
          error: () => {
            //TODO: Handle Error
          },
        });
    }
  }
}
