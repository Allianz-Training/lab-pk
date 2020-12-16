import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  toDoItems = ['Coffee', 'Breakfast'] 
  @Input()
  toDoItem: string
  constructor() { }

  ngOnInit(): void {
  }

  addItem(): void {
    this.toDoItems.push(this.toDoItem)
    this.toDoItem = ''
  }
  deleteItem(toDoItem: number): void {
    this.toDoItems.splice(toDoItem, 1)
  }
}
