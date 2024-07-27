import { Component, inject } from '@angular/core';
import { CreateTaskComponent } from "../create-task/create-task.component";
import ITask from '../../interfaces/ITask';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TodoLocalStorageService } from '../../services/todo-local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CreateTaskComponent, CommonModule, TaskItemComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  todoList!:ITask[];
  listEmpty:boolean;
  #service = inject(TodoLocalStorageService);
  #router = inject(Router);

  constructor(){
    this.updateList();
    this.todoList?this.listEmpty = false : this.listEmpty=true;
  }

  initializeList(){
    this.#service.initialize();
    this.todoList = [];
    this.listEmpty = true;
  }

  addTask(task:ITask){
    this.#service.create(task);
    this.updateList();
    this.listEmpty = false;
  }

  getPendentes(){
    return this.todoList.filter(task=>!task.checked);
  }

  getConcluidas(){
    return this.todoList.filter(task=>task.checked);
  }

  updateList(){
    const list = this.#service.findAll()
    if(list)this.todoList = list;
  }

  clearList(){
    this.#service.clear();
    this.listEmpty = true;
    this.#router.navigate(["/"]);
    window.location.reload();
  }
}