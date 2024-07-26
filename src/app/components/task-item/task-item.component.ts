import { Component, EventEmitter, Input, Output } from '@angular/core';
import ITask from '../../interfaces/ITask';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {
  @Input({required:true}) task!:ITask;
  @Output() hasChanged = new EventEmitter<ITask>();

  toggleStatus(){
    this.task.checked = !this.task.checked;
  }

  deleteTask(){
    //clear localstorage
    this.task==undefined;
  }
}
