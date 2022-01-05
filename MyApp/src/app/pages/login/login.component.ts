import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService, CredentialInterface } from 'src/app/services/authentification.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userInput: CredentialInterface = {
    login:'',
    password:''
  };

  isAuthentificated = false;
  isSubmitted = false;


  constructor(private security: AuthentificationService, private router: Router) { }

  ngOnInit(): void {
  }

  validateForm(): void {
    this.isSubmitted = true;
    this.isAuthentificated = this.security.authentificate(this.userInput);
    if(this.isAuthentificated) {
      this.router.navigate(['/home'])
    } 
  }
}
