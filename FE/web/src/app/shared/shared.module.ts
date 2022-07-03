import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [],
  imports: [CommonModule, TranslocoModule, ToastrModule],
  exports: [],
})
export class SharedModule {}
