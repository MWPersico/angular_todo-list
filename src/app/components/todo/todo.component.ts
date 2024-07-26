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

  constructor(){
    this.initializeList();
    this.addTask({value:"", id:1,checked:false})
  }

  initializeList(){
    this.todoList = [];
    this.listEmpty = true;
  }

  addTask(task:ITask){
    this.todoList.push(task);
    this.listEmpty=false;
  }
}