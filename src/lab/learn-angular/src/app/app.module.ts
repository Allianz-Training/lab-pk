import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CountingComponent } from './counting/counting.component';
import { Lab4ComponentComponent } from './lab4-component/lab4-component.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { H3TopBannerComponent } from './h3-top-banner/h3-top-banner.component';
import { H3SearchBarComponent } from './h3-search-bar/h3-search-bar.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { BackendService } from './backend.service';
import { CatalogModule } from './catalog/catalog.module';
import { HomeModule } from './home/home.module';
import { RoutingModule } from './routing/routing.module';
import { H3Component } from './h3/h3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountingComponent,
    Lab4ComponentComponent,
    TodoListComponent,
    H3TopBannerComponent,
    H3SearchBarComponent,
    HomeComponentComponent,
    H3Component,
  ],
  imports: [
    BrowserModule, FormsModule, CatalogModule, HomeModule, RoutingModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
