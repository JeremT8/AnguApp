import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo, TodoDTOInterface } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  task: Todo;

  constructor(private taskService: TodoService, private router: Router) {
    this.task = this.taskService.getNewTodo()
  }

  ngOnInit(): void {
  }

  validateForm() {
    this.taskService.addTask(this.task);
    this.router.navigate(['/todolist']);
  }
}
