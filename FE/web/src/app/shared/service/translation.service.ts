import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { SharedModule } from '../shared.module';

@Injectable({
  providedIn: SharedModule,
})
export class TranslationService {
  constructor(private translocoService: TranslocoService) {}

  translate(key: string): string {
    return this.translocoService.translate(key);
  }
}
