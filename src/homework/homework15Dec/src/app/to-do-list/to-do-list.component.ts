import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Task } from '../task';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  @ViewChildren(TaskComponent)
  tasks: QueryList<TaskComponent>

  toDoList: Task[]
  idInc: number

  @Input()
  name: string

  @Input()
  description: string

  task: Task

  constructor() { 
    this.toDoList = []
  }

  ngOnInit(): void {}

  deletedTask(taskComponent: TaskComponent): void {
    this.idInc = this.toDoList[this.toDoList.length - 1].id
    this.toDoList.splice(this.toDoList.indexOf(taskComponent.task),1)
  }

  addTask() {
    this.toDoList.push({id: this.idInc, name: this.name , description: this.description})
  }

  showTask(taskComponent: TaskComponent) {
    this.task = taskComponent.task
  }

}
