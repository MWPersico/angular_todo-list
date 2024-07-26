import { Component } from '@angular/core';
import { CreateTaskComponent } from "../create-task/create-task.component";
import ITask from '../../interfaces/ITask';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CreateTaskComponent, CommonModule, TaskItemComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  listEmpty = true;
  todoList!:ITask[];

  constructor(){
    this.initializeList();
    this.addTask({value:"a", id:1,checked:false})
    this.addTask({value:"b", id:2,checked:true})
  }

  initializeList(){
    this.todoList = [];
    this.listEmpty = true;
  }

  addTask(task:ITask){
    this.todoList.push(task);
    this.listEmpty=false;
  }

  getPendentes(){
    return this.todoList.filter(task=>!task.checked);
  }

  getConcluidas(){
    return this.todoList.filter(task=>task.checked);
  }

  updateList(){
    // retrieve local storage data
  }
}