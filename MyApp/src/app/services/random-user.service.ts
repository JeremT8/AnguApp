import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { map } from 'rxjs/operators';


interface RandomUserInterface {
    name: string;
    firstName: string;
    picture: string;
    address: string;
  }


@Injectable({
  providedIn: 'root'
})


export class RandomUserService {

  readonly url = 'https://randomuser.me/api';
 
  response: Observable<RandomUserInterface[]> = new Observable<RandomUserInterface[]>();

  search = {
    nat:'',
    gender:'',
    results: '10'
  };

  constructor(private http: HttpClient) { }

  private mapUsers(response: any): RandomUserInterface[] {
    const users = response.results.map((item: any) => {
      return {
        name: item.name.last,
        firstName: item.name.first,
        picture: item.picture.thumbnail,
        address: item.location.street.number + ' ' + item.location.street.name
      }
    });
    return users;
  }

  loadUsers() {
    const httpParams = new HttpParams()
                        .set('results', this.search.results)
                        .set('nat', this.search.nat)
                        .set('gender', this.search.gender);
    this.response = this.http.get(this.url, {params: httpParams})
                        .pipe(map( (response: any) => this.mapUsers(response) ));
  }
}

