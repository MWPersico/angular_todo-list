import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  
  createTask(){
    this.task = {
      id:new Date().valueOf(),
      value:this.taskValue,
      checked:false
    }
    this.taskCreated.emit(this.task);
  }
}
