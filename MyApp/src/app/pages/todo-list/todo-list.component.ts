import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList: any = [];

  constructor(private todoListService: TodoService) {
    this.todoList = todoListService.todoList;
  }

  ngOnInit(): void {
  }

}
