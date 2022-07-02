import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;

  constructor(fb: FormBuilder) {
    this.loginFormGroup = fb.group({
      "email": ['', [Validators.required, Validators.email]],
      "password": ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  ngOnInit(): void {
  }

  login(): void {
    console.log(this.loginFormGroup)
  }

}
