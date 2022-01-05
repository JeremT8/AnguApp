import { Injectable } from '@angular/core';
import { User, UserInterface } from '../models/user.model';

export interface CredentialInterface {
  login: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  user: UserInterface;
 service-authentification


  constructor() {
    this.user = new User();
   }

  authentificate(credentials: CredentialInterface)  {
    const isAuthenticated =  credentials.login === 'user' && credentials.password === '123';

    if (isAuthenticated) {
      this.user = new User({
        userName: 'Default User',
        login: credentials.login
      });
    }
    return isAuthenticated;
  }


}
