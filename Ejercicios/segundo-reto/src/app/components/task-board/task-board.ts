import { Component } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { TaskCard } from '../task-card/task-card';

@Component({
  selector: 'app-task-board',
  imports: [TaskCard],
  templateUrl: './task-board.html',
  styleUrl: './task-board.css',
})
export class TaskBoard {
  tasks: Task[] = [
    {id: 1, title: 'Aprender Angular', isCompleted: false},
    { id: 2, title: 'Dominar TypeScript', isCompleted: false },
    { id: 3, title: 'Crear un componente hijo', isCompleted: false }
  ]

  onTaskCompleted(taskId: number){
    const task = this.tasks.find(t=> t.id === taskId)
    if(task){
      task.isCompleted = true
      console.log(`Tarea ${taskId} completada`)
    }
  }

}
