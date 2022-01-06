import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  taskList: Todo[] = [
    new Todo({taskName: "Faire le menage", done: false, id: 1, user: 'jerem'}),
    new Todo({taskName: "Apprendre l'espagnol", done: false, id: 2, user: 'jerem'}),
  ];
  
  constructor() {
    
   }


  getNewTodo(): Todo {
     return new Todo();
   }

  addTask(data: Todo | undefined): void {
     if(data) {
       this.taskList.push(data);
     }
   }

  deleteTask(id: number | undefined): void {
    const index = this.taskList.findIndex(item => item.id == id);
    this.taskList.splice(index, 1);
  }

  saveTask(data: Todo): void {
   const taskExist = this.taskList.find(item => item.id == data.id);
    if(! taskExist) {
        this.taskList.push(data)
      }
  }

  getOneById(id: number): Todo {
    const task =  this.taskList.find(item => item.id == id);
    return task || new Todo();
  }
   
}