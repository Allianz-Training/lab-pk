import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { TopBannerComponent } from '../top-banner/top-banner.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { CategoryMenuComponent } from '../category-menu/category-menu.component';



@NgModule({
  declarations: [NavbarComponent, TopBannerComponent, SearchBarComponent, CategoryMenuComponent ],
  imports: [
    CommonModule
  ],
  exports: [NavbarComponent, TopBannerComponent, SearchBarComponent, CategoryMenuComponent]
})
export class HomeModule { }
