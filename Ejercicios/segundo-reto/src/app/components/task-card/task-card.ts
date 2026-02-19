import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {

  @Input() task!: Task

  @Output() completeTask = new EventEmitter<number>()



  markAsDone() {
    if (this.task) {
      this.completeTask.emit(this.task.id)

    }
  }

}
