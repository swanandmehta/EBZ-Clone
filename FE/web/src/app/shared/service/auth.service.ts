import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Server } from 'src/app/shared/constant/server';
import { environment } from 'src/environments/environment';
import { Login } from '../../auth/interface/login';
import { LoginResponse } from '../../auth/interface/login-response';
import { SharedModule } from '../shared.module';

@Injectable({
  providedIn: SharedModule,
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(login: Login): Observable<LoginResponse> {
    return this.httpClient.post(environment.server.url + '/auth/login', login, {
      headers: Server.HTTP_HEADERS,
    });
  }
}
