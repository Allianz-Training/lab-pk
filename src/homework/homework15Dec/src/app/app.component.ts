import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'homework15Dec';

  @ViewChild('toDoList')
  toDoList: ToDoListComponent

  ngAfterViewInit() {
    this.toDoList.toDoList.push({id: 1, name: 'task1', description: 'asdasds'})
    this.toDoList.toDoList.push({id: 2, name: 'task2', description: 'asdasds'})
    this.toDoList.toDoList.push({id: 3, name: 'task3', description: 'asdasds'})
    this.toDoList.toDoList.push({id: 4, name: 'task4', description: 'asdasds'})
  }
}
