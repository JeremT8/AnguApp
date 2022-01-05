import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataInterface } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  userInput: TodoDataInterface = {
    titre: '',
    detail: ''
  };

  constructor(private todoListService: TodoService, private router: Router) {
       }

  ngOnInit(): void {
  }

  validateForm(): void {
    this.todoListService.addTodo(this.userInput);
    this.router.navigate(['/todolist']);
    } 
  }
