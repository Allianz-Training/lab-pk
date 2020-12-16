import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CountingComponent } from './counting/counting.component';
import { Lab4ComponentComponent } from './lab4-component/lab4-component.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { H3TopBannerComponent } from './h3-top-banner/h3-top-banner.component';
import { H3SearchBarComponent } from './h3-search-bar/h3-search-bar.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductItemComponent } from './product/product-item/product-item.component';
import { PanelComponent } from './panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TopBannerComponent,
    CategoryMenuComponent,
    SearchBarComponent,
    CountingComponent,
    Lab4ComponentComponent,
    TodoListComponent,
    H3TopBannerComponent,
    H3SearchBarComponent,
    HomeComponentComponent,
    ProductListComponent,
    ProductItemComponent,
    PanelComponent,
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
