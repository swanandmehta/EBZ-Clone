import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Gender } from '../enums/gender';
import { User } from '../interface/user';
import { SharedModule } from '../shared.module';

@Injectable({
  providedIn: SharedModule,
})
export class UserMonitorService {
  private userSubject: Subject<User> = new BehaviorSubject<User>({
    firstName: '',
    lastName: '',
    gender: Gender.MALE,
    id: '',
    image: '',
  });

  constructor() {}

  get activeUser() {
    return this.userSubject.asObservable();
  }

  set user(user: User) {
    this.userSubject.next(user);
  }
}
