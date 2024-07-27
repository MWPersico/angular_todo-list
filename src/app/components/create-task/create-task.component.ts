import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import ITask from '../../interfaces/ITask';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})
export class CreateTaskComponent {
  taskValue = "";
  task!:ITask;
  @Output() taskCreated = new EventEmitter<ITask>();
  
  createTask(input:NgModel){
    this.task = {
      id:new Date().valueOf(),
      value:this.taskValue,
      checked:false
    }
    this.taskValue="";
    this.taskCreated.emit(this.task);
  }
}
