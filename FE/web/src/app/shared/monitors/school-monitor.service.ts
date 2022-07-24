import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { School } from '../interface/school';
import { SharedModule } from '../shared.module';

@Injectable({
  providedIn: SharedModule,
})
export class SchoolMonitorService {
  private schoolSubject: Subject<School> = new BehaviorSubject<School>({
    id: '',
    name: '',
  });

  constructor() {}

  get activeSchool() {
    return this.schoolSubject.asObservable();
  }

  set school(school: School) {
    this.schoolSubject.next(school);
  }
}
