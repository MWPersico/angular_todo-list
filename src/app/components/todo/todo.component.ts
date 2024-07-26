import { Component } from '@angular/core';
import { CreateTaskComponent } from "../create-task/create-task.component";
import ITask from '../../interfaces/ITask';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CreateTaskComponent, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  listEmpty = true;
  todoList!:ITask[];

  initializeList(){
    this.todoList = [];
  }

  addTask(task:ITask){
    this.todoList.push(task);

    if(this.listEmpty)this.listEmpty=false;
  }
}