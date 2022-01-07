import { Component, OnInit } from '@angular/core';
import { RandomUserService } from 'src/app/services/random-user.service';


@Component({
  selector: 'app-random-user-list',
  templateUrl: './random-user-list.component.html',
  styleUrls: ['./random-user-list.component.css']
})
export class RandomUserListComponent implements OnInit {

  constructor(public randomUserService: RandomUserService) { }

  ngOnInit(): void {
    this.randomUserService.loadUsers();
  }

  

}
