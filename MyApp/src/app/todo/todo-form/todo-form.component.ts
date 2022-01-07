import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo, TodoDTOInterface } from 'src/app/models/todo.model';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  task: Todo;

  update: boolean = false;

  constructor(private taskService: TodoService, private router: Router, private currentRoute: ActivatedRoute, public security: AuthentificationService) {
    this.task = this.taskService.getNewTodo();
    
    currentRoute.params.subscribe( params => {
      const id = params['id'];
      this.task = this.taskService.getOneById(id);
    })
  }

  ngOnInit(): void {
  }

  validateForm(taskForm: NgForm) {
    if (taskForm.form.valid) {
      
    }
    // this.taskService.saveTask(this.task);
    // this.router.navigate(['/todolist']);
  }
}
