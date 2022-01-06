import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDTOInterface } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  constructor() {
    
  }

  ngOnInit(): void {
  }
  }
