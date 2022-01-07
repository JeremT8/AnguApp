import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-user-list',
  templateUrl: './random-user-list.component.html',
  styleUrls: ['./random-user-list.component.css']
})
export class RandomUserListComponent implements OnInit {

  readonly url = "https://randomuser.me/api";

  userList: any = []
  search = {
    nat: '',
    gender: '',
    results: 10
  }

  constructor(private http: HttpClient) {
    
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    const httpParams = new HttpParams()
    .set('results', this.search.results)
    .set('nat', this.search.nat)
    .set('gender', this.search.gender)
    this.http.get(this.url, {params: httpParams}).subscribe((response: any) => {
      this.userList = response.results;
    })
  }

}
