import { Injectable } from '@angular/core';
import { StorageKey } from '../enums/storage-key';
import { SharedModule } from '../shared.module';

@Injectable({
  providedIn: SharedModule,
})
export class SessionService {
  constructor() {}

  setItem(key: StorageKey, value: string): void {
    sessionStorage.setItem(key.toString(), value);
  }

  getItem(key: StorageKey): string | null {
    return sessionStorage.getItem(key.toString());
  }
}
