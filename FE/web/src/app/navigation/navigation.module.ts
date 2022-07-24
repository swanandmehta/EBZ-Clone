import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { HeaderComponent } from './component/header/header.component';
import { HeaderSearchComponent } from './component/header-search/header-search.component';
import { HeaderNavigationComponent } from './component/header-navigation/header-navigation.component';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderSearchComponent,
    HeaderNavigationComponent,
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    SharedModule,
    FontAwesomeModule
  ],
  exports: [HeaderComponent],
})
export class NavigationModule {}
