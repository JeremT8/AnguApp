import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { LocalStorageService } from 'ngx-webstorage';


const TODO_KEY = 'todos'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  taskList: Todo[] = [
    new Todo({taskName: "Faire le menage", done: false, id: 1, user: 'jerem'}),
    new Todo({taskName: "Apprendre l'espagnol", done: false, id: 2, user: 'jerem'}),
  ];

  filteredTaskList: Todo[] = [];
  

  search: string = "";


  constructor(private storage: LocalStorageService) {
    this.loadFromStorage();
    this.filterTask();
   }

   loadFromStorage(): void {
    const rawData = this.storage.retrieve(TODO_KEY)
    if(rawData) {
      const data = JSON.parse(rawData);
      this.taskList = data;
    }
   }

   persist() {
     this.storage.store(TODO_KEY, JSON.stringify(this.taskList))
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
    this.persist();
  }

  saveTask(data: Todo): void {
   const taskExist = this.taskList.find(item => item.id == data.id);
    if(! taskExist) {
        this.taskList.push(data)
      }
      this.persist();
  }

  getOneById(id: number): Todo {
    const task =  this.taskList.find(item => item.id == id);
    return task || new Todo();
  }

  filterTask(): void {
    if(this.search) {
      this.filteredTaskList = this.taskList.filter(item => item.user == this.search);
    } else {
      this.filteredTaskList = this.taskList;
    }
  } 
   
}