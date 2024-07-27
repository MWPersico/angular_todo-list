import { Injectable } from '@angular/core';
import ITask from '../interfaces/ITask';

@Injectable({
  providedIn: 'root'
})
export class TodoLocalStorageService {
  LIST_NAME = "@myList";
  private _getList = ():ITask[]=>JSON.parse(<string> localStorage.getItem(this.LIST_NAME)) as ITask[];
  private _setList = (tasks:ITask[])=>localStorage.setItem(this.LIST_NAME, JSON.stringify(tasks));

  findAll():ITask[]{
    return this._getList();
  }

  delete(id:number){
    const list = this._getList();
    const index = list.findIndex(t=>t.id==id);
    const newList = [...list.slice(0,index), ...list.slice(index+1)];
    this._setList(newList);
  }

  update(task:ITask){
    console.log(task);
    const list = this._getList();
    const index = list.findIndex(t=>t.id==task.id);
    list[index] = task;
    this._setList(list);
  }

  create(task:ITask){
    const list = this._getList();
    list.push(task);
    this._setList(list);
  }

  initialize(){
    localStorage.setItem(this.LIST_NAME, "[]");
  }

  clear(){
    localStorage.removeItem(this.LIST_NAME);
  }
}
