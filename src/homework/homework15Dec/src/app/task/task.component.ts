import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input()
  task: Task

  @Output()
  onSelected: EventEmitter<TaskComponent> = new EventEmitter()

  @Output()
  onClick: EventEmitter<TaskComponent> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  selected(): void {
    this.onSelected.emit(this)
  }

  clicked(): void {
    this.onClick.emit(this)
  }

}
