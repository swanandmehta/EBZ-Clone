import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { HeaderSearchComponent } from './component/header-search/header-search.component';
import { HeaderNavigationComponent } from './component/header-navigation/header-navigation.component';
import { TranslocoModule } from '@ngneat/transloco';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderSearchComponent,
    HeaderNavigationComponent,
  ],
  imports: [CommonModule, TranslocoModule, ToastrModule],
  exports: [HeaderComponent],
})
export class SharedModule {}
