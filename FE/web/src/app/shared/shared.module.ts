import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { HeaderSearchComponent } from './component/header-search/header-search.component';
import { HeaderNavigationComponent } from './component/header-navigation/header-navigation.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HeaderSearchComponent,
    HeaderNavigationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent]
})
export class SharedModule { }
