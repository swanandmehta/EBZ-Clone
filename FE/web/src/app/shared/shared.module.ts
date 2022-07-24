import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TranslocoPipe } from '@ngneat/transloco';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [],
  imports: [CommonModule, TranslocoModule, ToastrModule],
  exports: [TranslocoPipe],
})
export class SharedModule {}
