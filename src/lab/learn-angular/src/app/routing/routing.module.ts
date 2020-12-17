import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { CountingComponent } from '../counting/counting.component';
import { H3Component } from '../h3/h3.component';
import { HomeComponent } from '../home/home.component';
import { Lab4ComponentComponent } from '../lab4-component/lab4-component.component';
import { ProductListComponent } from '../product/product-list/product-list.component';
import { TodoListComponent } from '../todo-list/todo-list.component';

const routes: Routes = [
  {
    path: '',
    component: H3Component
  },

  {
    path: 'hw1',
    component: HomeComponent
  },

  {
    path: 'lab4',
    component: Lab4ComponentComponent
  },

  {
    path: 'toDoList',
    component: TodoListComponent
  },

  {
    path: 'counting',
    component: CountingComponent
  },

  {
    path: 'products',
    component: ProductListComponent
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
