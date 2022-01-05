import { Injectable } from '@angular/core';
import { Todo, TodoDataInterface} from '../models/todo.model'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todo: TodoDataInterface;

  todoList: TodoDataInterface[] = [
    {titre: 'Médor', detail: 'Sortir le chien'},
    {titre: 'Bosch', detail: 'Tondre la pelouse'},
    {titre: 'Saumon', detail: 'Faire cuire le saumon'},
    {titre: 'Prostate', detail: 'Rendez vous le 22 Janvier'}
  ]

  constructor() {
    this.todo = new Todo();
   }

   addTodo(todo: TodoDataInterface) {
     this.todoList.push(todo)
   }
}