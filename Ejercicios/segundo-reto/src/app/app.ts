import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskCard } from './components/task-card/task-card';
import { TaskBoard } from './components/task-board/task-board';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskCard, TaskBoard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('segundo-reto');
}
