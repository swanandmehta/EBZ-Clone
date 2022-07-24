import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../../interface/login';
import { AuthService } from '../../../shared/service/auth.service';
import { LoginResponse } from '../../interface/login-response';
import { SessionService } from 'src/app/shared/service/session.service';
import { StorageKey } from 'src/app/shared/enums/storage-key';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;

  constructor(
    fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private sessionService: SessionService
  ) {
    this.loginFormGroup = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {}

  login(): void {
    if (this.loginFormGroup.valid) {
      this.authService.login(this.loginFormGroup.value as Login).subscribe({
        next: (response: LoginResponse) => {
          this.sessionService.setItem(StorageKey.USERID, response.userId);
          this.router.navigateByUrl('/dashboard');
        },
        error: () => {
          //TODO: Handle error
        },
      });
    }
  }
}
