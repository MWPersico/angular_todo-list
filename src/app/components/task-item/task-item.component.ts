import { Component, EventEmitter, Input, Output } from '@angular/core';
import ITask from '../../interfaces/ITask';
import { FormsModule } from '@angular/forms';
import { TodoLocalStorageService } from '../../services/todo-local-storage.service';

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

  constructor(private _service:TodoLocalStorageService){}

  toggleStatus(){
    this.task.checked = !this.task.checked;
    this._service.update(this.task);
    this.hasChanged.emit()
  }

  deleteTask(){
    this._service.delete(this.task.id);
    this.task==undefined;
    this.hasChanged.emit()
  }

  changeValue(){
    this._service.update(this.task);
    this.hasChanged.emit()
  }
}
